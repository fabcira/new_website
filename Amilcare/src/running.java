package AmilcareApi;

/**
 * Title:        Interface for  Amilcare
 * Description:  Adaptive system for information extraction from text
 * Copyright:    Copyright (c) 2001
 * Company:      Dept. Computer Science Univ. of Sheffield
 * @author Fabio Ciravegna
 * @version 1.0
 */

public class Prova {

  public Prova() {
  }
  public static void main(String[] args) {
    Prova prova1 = new Prova();
    String[] scenario={"D:\\Fabio\\Java\\Amilcare2.0\\AmilcareParser\\TempDirs\\Data\\scenario.sce"};
    callAmilcare(scenario);
  }


  /**
   * example of how to run Amilcare from the API
   * @param args an array that contains the name of the scenario
   */
   public static void callAmilcare(String[] args) {
   try{

   //it does not allow Amilcare to interact with the user in case of errors:
   //it just prints on the standard output
    AmilcareApi.API.setDialogBoxesActive(false);

    //this is the path were amilcare reads/writes the temporary files
    amilcare.amilcare.AmilcarePATH="D:\\Fabio\\Java\\Tagging\\LazyNlp\\TempDirs\\";
    String suggestedScenarioFile;
    if (args.length>0)
      suggestedScenarioFile=args[0];
    else suggestedScenarioFile=amilcare.API.getAmilcarePath()+"Data\\scenario.sce";

    System.out.println("init");
    AmilcareApi.API.init();
    System.out.println("scenario file and name");
    AmilcareApi.API.loadScenario(suggestedScenarioFile);
  try{
    AmilcareApi.API.setSplitCorpusInTwo(false);
    //sets
    AmilcareApi.API.setPreprocessedCorpusName(amilcare.API.getAmilcarePath()+"TempDirs\\Temp\\AllCorpus.txt");
    AmilcareApi.API.setTextsNumber(10);
    System.out.println("learning");
    AmilcareApi.API.learnRules();
    System.out.println("extracting information");
    AmilcareApi.API.extractInformation();
    //now prints the accuracy of the extracted information (only for test mode where
    // the test corpus has answers associated)
//    String[] annot=AmilcareApi.API.getAnnotationList();
//    for (int yy=0; yy<annot.length; yy++){
//      String tagName=annot[yy];
//      outFile.println(tagName + " " + AmilcareApi.API.getAnnotationPossibleMatches(tagName) + " "
//            + AmilcareApi.API.getAnnotationActualMatches(tagName) + " " + AmilcareApi.API.getAnnotationCorrectMatches(tagName)
//	   + " " + AmilcareApi.API.getAnnotationWrongMatches(tagName)  + " " + AmilcareApi.API.getAnnotationPartialMatches(tagName)  + " "
//           + AmilcareApi.API.getAnnotationMissingMatches(tagName)  + " "
//           + AmilcareApi.API.getAnnotationPrecision(tagName)  + " "
//	   + AmilcareApi.API.getAnnotationRecall(tagName)  + " " + AmilcareApi.API.getAnnotationAccuracy(tagName) );
//    }
//
    System.out.println("------------------- Tags -------------------");
    AmilcareApi.API.getTaggingResults();
    AmilcareApi.API.printTaggingResults();
//    System.out.println("------------------- Templates -------------------");
//    getTemplateResults();
//    printTemplateResults();

    System.out.println("_________________________________________________");
//    outFile.println("_________________________________________________");
//    outFile.flush();

//   }
//   outFile.close();
   } catch(Exception e){
	System.out.println("Cannot write file " + "./Output/stats");
      }

    System.exit(0);

   } catch (Exception e) {
    System.out.println("exit on error");
    e.printStackTrace();
    }
  }
}


