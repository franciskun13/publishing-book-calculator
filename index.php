<?php

session_start();

if (!isset($_SESSION['success']))
{
    $_SESSION["success"] = "";
}

?>

<!-- START OF HTML CONTENT -->
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>2nimble Service Cost Calculator</title>
        <!-- <link rel="stylesheet" href="https://codepen.io/gymratpacks/pen/VKzBEp#0"> -->
        <link href='https://fonts.googleapis.com/css?family=Nunito:400,300' rel='stylesheet' type='text/css'>
        <!-- <link rel="stylesheet" href="css/main.css"> -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
        <link rel="stylesheet" href="style.css">
        <script src="https://code.jquery.com/jquery-3.1.1.min.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/semantic-ui-accordion@2.3.1/accordion.js"></script>

        <link rel="icon" 
        type="image/png" 
        href="calculator.ico">

    </head>
    <body>
      <div class="row">
    <div class="col-md-12">
      <form action="mail.php" id="calculatingForm" method="post" onkeydown="return event.key != 'Enter';">
        <h1 id="h1"> 2nimble Service Cost Calculator </h1>


        <?php

        if ($_SESSION["success"] == "TRUE") {

          echo "
          <div style=\"padding-left:15px;padding-right:15px;margin-bottom:15px;\">
          <div class=\"ui success message\">
          <i class=\"close icon\"></i>
          <div class=\"header\">
            Your request has been submitted and we will be in touch with you shortly.
          </div>
          </div>
          </div>

          ";

           $_SESSION["success"] = "";

        }

        ?>

        <fieldset>
          
          <legend>Contact Information</legend>
          <div class="fieldDiv">
          <label for="name">First Name:</label>
          <input type="text" id="firstName" name="firstName">
          <label for="name">Last Name:</label>
          <input type="text" id="lastName" name="lastName">
        
          <label for="email">Email:</label>
          <input type="email" id="email" name="email">
       
          <label for="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" maxlength="15" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
          <!-- placeholder="000-000-0000"  -->
          </div>
        </fieldset>
        
        <fieldset>  
            <p class="legend2">Book Information<br>
            <!-- <span style="color:#00AEF0; font-size: 15px;">Please answer the following section so we can provide the right qoutation for you.</span></p> -->
            
          <div class="fieldDiv">
          
            <label for="name">Working Title:</label>
            <input type="text" id="bookTitle" name="bookTitle" required>
            <!-- Manuscript Word Count -->
            <label for="name">Manuscript Word Count:</label>
            <input type="text" placeholder="18,000" id="manuscriptWordCount" name="manuscriptWordCount" onkeypress="return isNumberKey(event)" onchange="liveCalculation()" onblur="liveCalculation()" required>
            <small style="font-style: italic;">Service pricing is based on an 18,000 word minimum</small>
            <p style="font-size:10px !important; margin:0;">&nbsp;</p>
            <!-- Number of images in the manuscript -->
            <label for="name">Number of images in the manuscript:</label>
            <input type="text" placeholder="0" id="noOfImages" name="noOfImages" onkeypress="return isNumberKey(event)" onchange="liveCalculation()" onblur="liveCalculation()">
            <!-- Number of footnotes and end-notes in the manuscript -->
            <label for="name">Number of footnotes and end-notes in the manuscript:</label>
            <input type="text" placeholder="0" id="noOfFNEN" name="noOfFNEN" onkeypress="return isNumberKey(event)" onchange="liveCalculation()" onblur="liveCalculation()">
        
         </fieldset>
         <fieldset>  
            <p class="legend2">Services:<br>
            
          <div class="fieldDiv">
            <div class="ui styled fluid accordion">
                <!-- Editing Services -->
                <div class="title">
                  <i class="dropdown icon"></i>
                  Editing
                </div>
                <div class="content">
                  <p class="serviceLink"><a href="https://2nimble.com/services/editing/" target="_blank">Editing</a></p>
                    <div class="title">
                        <i class="dropdown icon"></i>
                        Review Services
                      </div>
                      <div class="content">
                        <p class="transition hidden">
                            <label for=""><input type="radio" id="editingChecks" name="reviewServices" value="Editing Checks" onclick="deselectEditingChecks();liveCalculation()" onchange="liveCalculation()"> Editing Check</label>
                            <label for=""><input type="radio" id="manuscriptEvaluation" name="reviewServices" value="Manuscript Evaluation" onclick="deselectManuscriptEvaluation(); liveCalculation()" onchange="liveCalculation()"> Manuscript Evaluation</label>
                        </p>
                    </div>
                    <div class="title">
                        <i class="dropdown icon"></i>
                        Editing Services
                      </div>
                      <div class="content">
                        <p class="transition hidden">
                            <label for=""><input type="radio" id="proofreading" name="editingServices" value="Proofreading" onclick="deselectProofreading();liveCalculation()" onchange="liveCalculation()"> Proofreading</label>

                            <label for=""><input type="radio" id="developmentalEditing" name="editingServices" value="Developmental Editing" onclick="deselectDevelopmentalEditing();liveCalculation()" onchange="liveCalculation()"> Developmental Editing</label>

                            <label for=""><input type="radio" id="copyediting" name="editingServices" value="Copyediting" onclick="deselectCopyediting();liveCalculation()" onchange="liveCalculation()"> Copyediting</label>

                            <label for=""><input type="radio" id="lineEditing" name="editingServices" value="Line Editing" onclick="deselectLineEditing();liveCalculation()" onchange="liveCalculation()"> Line Editing</label>      
                        </p>   
                    </div>
                    <br>
                    <label for="name">Editing Cost:</label>
                    <input type="text" id="editingCost" class="costDiv" name="editingCost" onchange="liveCalculation()" readonly>
                </div>
                <!-- Typesetting Service -->
                <div class="title">
                  <i class="dropdown icon"></i>
                  Typesetting
                </div>
                <div class="content">
                    <p class="transition hidden serviceLink">
                       <input type="radio" id="typeSettingService" value="Typesetting Service" name="typeSettingService" onclick="selectFormattingDesignService(); deselectTypsettingService(); liveCalculation();" onchange="liveCalculation()" ><label style="font-weight: bold !important;" class="light" for="typeSettingService"><a href="https://2nimble.com/our-services/book-production/book-interiors/typesetting/" target="_blank">Typesetting</a></label><br>
                     <!--  Typesetting Service -->
                     <div> <!--  Encapsulated inside this DIV to bypass semantic UI visible element -->
                     <div id="typeSettingServiceDIV" style="display: none !important;">
                         
                            <p id="typeSettingCostText" class="subCost" style=""></p>
                            <p class="subCost">

                            	<!-- <strong>Basic</strong><br><br>
                                Your book will be formatted using our template of your choice, including up to 10 images charts, graphs, endnotes, footnotes, etc.<br><br>
                                Turnaround Time: 10 business days<br><br>
                                <strong>Medium</strong><br><br>
                                Your book will be formatted using our template of your choice, including up to 25 images charts, graphs, endnotes, footnotes, etc.<br><br>
                                Turnaround Time: 15 business days<br><br>
                                <strong>Complex</strong><br><br>
                                Your book will be formatted according to your specifications. This service is necessary for:<br><br>
                                Children’s books<br>
                                Textbooks<br>
                                Any book with more than 25 images, charts, graphs, footnotes, endnotes, etc.<br><br>
                                Turnaround Time: Quote: 4 business days | Project: 15 business days<br><br> -->
                                
                                <p id="typeSettingCostText2" style="color:green; display: none;"></p>
                               
                                <label for="typesettingCost">Typesetting Cost:</label>
                                <input type="text" id="typesettingCost" class="costDiv" name="typesettingCost" readonly><br><br>
                            </p>
                         
                    </div>
                    </div>
                    </p>
                  
                </div>

                <!--  eBook Conversion Service -->
                <div class="title">
                  <i class="dropdown icon"></i>
                  eBook Conversion
                </div>
                <div class="content">
                    <p class="transition hidden serviceLink">
                        <input type="radio" id="eBookConversionService" value="eBook Conversion Service" name="eBookConversionService" onclick="selectFormattingDesignService(); deselecteBookConversionService(); liveCalculation()" onchange="liveCalculation()" ><label style="font-weight: bold !important;" class="light" for="design"><a href="https://2nimble.com/services/ebook/" target="_blank">eBook Conversion</a></label><br>
                     <!--  eBook Conversion Service -->
                    <div> <!--  Encapsulated inside this DIV to bypass semantic UI visible element -->
                    <div id="eBookConversionServiceDIV" style="display: none !important;">
                         
                            <p id="eBookConversionCostText" class="subCost" style=""></p>
                            <p class="subCost">
                                <!-- <strong>Basic</strong><br><br>
                                Similar to Basic Typesetting/Formatting, if you purchased that service and wish to have an eBook version as well, this is the accompanying service. For an eBook only, this service includes: Formatting using our template of your choice Up to 10 images charts, graphs, endnotes, footnotes, etc.<br><br>
                                Turnaround Time: 8 business days<br><br>

                                <strong>Medium</strong><br><br>
                                Similar to Medium Typesetting/Formatting, if you purchased that service and wish to have an eBook version as well, this is the accompanying service. For an eBook only, this service includes: Formatting using our template of your choice Up to 25 images charts, graphs, endnotes, footnotes, etc.<br><br>
                                Turnaround Time: 8 business days<br><br>

                                <strong>Complex</strong><br><br>
                                Your eBook will be formatted according to your specifications. This service is necessary if you are not using one of our formatting templates for your print book, or if your book contains more than 25 images, charts, graphs, endnotes, footnotes, etc.<br><br>
                                Turnaround Time: Quote: 4 business days | Project: 15 business days<br><br>

                                <strong>Fixed-format</strong><br><br>
                                For children’s books and textbooks only. Fixed format means that each page will be displayed exactly the same on every device, and readers will not be able to change the text size or font. This service is NOT recommended as several eBook distribution sites still do not allow for the distribution of fixed-format eBooks.<br><br>
                                Turnaround Time: Quote: 4 business days | Project: 15 business days<br><br> -->
                                <p id="eBookConversionCostText2" style="display: none;"></p>
                                <label for="eBookConversionCost">eBook Conversion Cost:</label>
                                <input type="text" id="eBookConversionCost" class="costDiv" name="eBookConversionCost" readonly><br><br>
                            </p>
                          
                    </div>
                    </div>
                    </p>
                  
                </div>

                <!--  Cover Design Creation -->
                <div class="title">
                  <i class="dropdown icon"></i>
                  Cover Design
                </div>
                <div class="content">
                    <p class="transition hidden serviceLink">
                        <input type="radio" id="coverDesignCreationServiceMain" value="Cover Design Creation" name="coverDesignCreationServiceMain" onclick="selectFormattingDesignService(); deselectCoverDesignCreationServiceMain();liveCalculation()" onchange="liveCalculation()" ><label style="font-weight: bold !important;" class="light" for="business"><a href="https://2nimble.com/services/cover-design/" target="_blank">Cover Design</a></label><br>
                     <!--  Cover Design Creation -->
                    <div> <!--  Encapsulated inside this DIV to bypass semantic UI visible element -->
                    <div id="coverDesignCreationDIV" style="display: none !important;">
                      
                            <p class="subCost">

                                <strong><label for=""><input type="radio" id="basicCoverDesign" name="coverDesignCreation" value="Basic Cover Design" onclick="deselectBasicCoverDesign();liveCalculation();selectFormattingDesignService()" onchange="liveCalculation()"> Basic Cover Design</label></strong>

                                Our design professionals will create a full-color cover spread for distribution listings using author provided images, text, and instruction. Fonts will be determined by the designer if not provided by the author. Includes one free revision cycle.<br><br>

                                <strong><label for=""><input type="radio" id="premiumCoverDesign" name="coverDesignCreation" value="Premium Cover Design" onclick="deselectPremiumCoverDesign();liveCalculation();selectFormattingDesignService()" onchange="liveCalculation()"> Premium Cover Design</label></strong>
                                
                                Our design professionals will create a full-color cover spread for distribution listings. The author will provide a brief description discussing the overall concept and feel of the book and any instruction for the designer. The designer will then search for appropriate images and text to best support the author’s needs. Two design options will be presented for the author to choose from. One free revision cycle can be applied to the chosen design.<br><br>
                            </p>
                             <label for="">Cover Design Cost:</label>
                             <input type="text" id="coverDesignCost" class="costDiv" onclick="liveCalculation()" name="coverDesignCost" readonly><br><br>
                          
                    </div>
                    </div>
                    </p>
                  
                </div>

                <!-- Illustration Service -->
                <div class="title">
                  <i class="dropdown icon"></i>
                  Illustration
                </div>
                <div class="content">
                    <p class="transition hidden serviceLink">
                        <input type="radio" id="illustrationServiceMain" value="Illustration Service" name="illustrationServiceMain" onclick="selectFormattingDesignService(); deselectIllustrationServiceMain(); liveCalculation()" onchange="liveCalculation()" ><label style="font-weight: bold !important;" class="light" for="business"><a href="https://2nimble.com/services/illustrations/" target="_blank">Illustration</a></label><br>
                    <!-- Illustration Service -->
                    <div> <!--  Encapsulated inside this DIV to bypass semantic UI visible element -->
                    <div id="illustrationServiceDIV" style="display: none !important;">
                                                   
                            <p class="subCost">
                                <strong><label for=""><input type="radio" id="basicIllustration" name="illustrationService" value="Basic" onchange="liveCalculation()" onclick="deselectBasicIllustration();liveCalculation()"> Basic</label></strong>

                                One scene of illustration. A more basic, mostly computer-generated image with minimal activity or thematic elements present, or a more involved illustration with a longer wait time for those not in a rush to publish.<br><br>
                                Turnaround time: 20-30 business days based on complexity<br><br>

                                <strong><label for=""><input type="radio" id="deluxeIllustration" name="illustrationService" value="Deluxe" onchange="liveCalculation()" onclick="deselectDeluxeIllustration();liveCalculation()"> Deluxe</label></strong>

                                One scene of illustration. A more in-depth illustration with detailed lines and shapes. Or, a basic illustration with a shorter wait time for those ready to publish now.<br><br>
                                Turnaround time: 10-15 business days based on complexity<br><br>

                                <strong><label for=""><input type="radio" id="premiumIllustration" name="illustrationService" value="Premium" onchange="liveCalculation()" onclick="deselectPremiumIllustration();liveCalculation()"> Premium</label></strong>

                                One extremely detailed scene with a mix of computer-generated images, fine lines, high-intensity color detail, intricate thematic elements, etc.<br><br>
                                Turnaround time: 20-30 business days based on complexity<br><br>
                                <strong>Note: While our illustration services do include specific pricing and turnaround times, both will be evaluated by our production team for complexity and a quote will be provided to you after reviewing the scope of your project with your support agent.</strong><br><br>
                               
                                
                                <label for="name">Number of Illustrations needed:</label>
                                <input type="text" placeholder="0" id="noOfIllustration" name="noOfIllustration" onkeypress="return isNumberKey(event)" onblur="liveCalculation()" onchange="liveCalculation()"><br><br>    
                            </p>
                          <label for="illustrationCost">Illustration Cost:</label>
                          <input type="text" id="illustrationCost" class="costDiv" name="illustrationCost" readonly>
                          <br><br>
                      
                          
                    </div>
                    </div>
                    </p>
                  
                </div>

                <!-- Indexing Service -->
                <div class="title">
                  <i class="dropdown icon"></i>
                  Indexing
                </div>
                <div class="content">
                    <p class="transition hidden serviceLink">
                        <input type="radio" id="indexingServiceMain" value="Indexing Service" name="indexingServiceMain" onclick="selectFormattingDesignService(); deselectIndexingServiceMain(); liveCalculation()" onchange="liveCalculation()"><label style="font-weight: bold !important;" class="light" for="business"><a href="https://2nimble.com/services/indexing/" target="_blank">Indexing</a></label><br>
                    <!-- Indexing Service -->
                    <div> <!--  Encapsulated inside this DIV to bypass semantic UI visible element -->
                    <div id="indexingServiceDIV" style="display: none !important;">
  
                            <p class="subCost">
                                <strong><label for=""><input type="radio" id="basicIndexing" name="indexingService" value="Basic" onchange="liveCalculation()" onclick="deselectBasicIndexing();liveCalculation()"> Basic</label></strong>
                                Our data entry professionals will use a list of keywords you submit to program an index. Entries will only appear where the keyword is exactly the same as the text in the book.<br><br>
                                Turnaround Time: 8 business days<br><br>
                                
                                <strong><label for=""><input type="radio" id="advancedIndexing" name="indexingService" value="Advanced" onchange="liveCalculation()" onclick="deselectAdvancedIndexing();liveCalculation()"> Advanced</label></strong>
                                Our data entry professionals comb manuscripts for any keyword or keyword combination submitted. (Examples of acceptable keyword searches: Publishing, Publishing rules, publishing a book)<br><br>
                                Turnaround Time: 15 business days<br><br>
                                
                                <strong><label for=""><input type="radio" id="conceptIndexing" name="indexingService" value="Concept" onchange="liveCalculation()" onclick="deselectConceptIndexing();liveCalculation()"> Concept</label></strong>
                                Our data entry professionals comb manuscripts for each provided concept. (Examples of a “concept”: Any pages that relate to World War One or WWI, Any pages that discuss steps to create a book)<br><br>
                                Turnaround Time: Quote: 4 business days | Project: 15 business days<br><br>
                                
    
                                <label for="name">Number of Keywords:</label>
                                <input type="text" style="" placeholder="0" id="noOfKeywords" name="noOfKeywords" onkeypress="return isNumberKey(event)" onblur="liveCalculation()" onchange="liveCalculation()"><br><br>
                            </p>
                            <p id="indexingCostText" style="color:green; display: none !important;"></p>
                            <label for="indexingCost">Indexing Cost:</label>
                            <input type="text" id="indexingCost" class="costDiv" name="indexingCost" readonly>
                          
                  </div>
                  </div>
                  
                </div>

                <!-- Distribution Services -->
                <div class="title">
                  <i class="dropdown icon"></i>
                  Distribution
                </div>
                <div class="content">
                    <p class="serviceLink"><a href="https://2nimble.com/our-services/distribution-fulfillment/" target="_blank">Distribution</a></p>
                    <p class="transition hidden serviceLink">
                        <label for=""><input type="radio" id="distribution1" name="distributionServices" value="3 Years Worldwide: P.O.D. print and eBook" onclick="deselectDistribution1();liveCalculation()" onchange="liveCalculation()"> 3 Years Worldwide: P.O.D. print and eBook</label>

                        <label for="female"><input type="radio" id="distribution2" name="distributionServices" value="3 Years Worldwide: P.O.D. print only" onclick="deselectDistribution2();liveCalculation()" onchange="liveCalculation()"> 3 Years Worldwide: P.O.D. print only</label>

                        <label for="male"><input type="radio" id="distribution3" name="distributionServices" value="3 Years Worldwide: eBook only" onclick="deselectDistribution3();liveCalculation()" onchange="liveCalculation()"> 3 Years Worldwide: eBook only</label><br>
                    </p>
                    <label for="name">Distribution Cost:</label>
                    <input type="text" id="distributionCost" class="costDiv" name="distributionCost" readonly>
                  
                </div>
              </div>
          
          </div>
        
         </fieldset>
        <fieldset>
          <p class="legend2">Services Total<br>
          <div class="fieldDiv" id="grandtotalDiv">
            
          <label for="name">Subtotal &nbsp;&nbsp;&nbsp; <input style="font-weight: unset !important;" type="text" id="totalCost" name="totalCost" readonly></label>
          
          <label for="name">Bundle Discount&nbsp;&nbsp;&nbsp;<input style="font-weight: unset !important;" type="text" id="bundleDiscount" name="bundleDiscount" readonly></label>
          
          <label for="name"><strong>Total</strong> &nbsp;&nbsp;&nbsp;<input style="font-weight: bold;" type="text" id="bundlePrice" name="bundlePrice" readonly></label>
          
          </div>
        </fieldset>
        <center><button type="reset" onclick="resetForm()">Clear</button> &nbsp; &nbsp; <button type="submit" value="Reset form">Submit</button></center>
        
       </form>
        </div>
      </div>
      
    </body>
</html>
<!-- END OF HTML CONTENT -->
<!-- JAVASCRIPT FUNCTIONS -->
<script src="script.js"></script>
