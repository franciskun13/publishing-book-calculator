 
 //Success Message Dismiss
  $('.message .close')
.on('click', function() {
  $(this)
    .closest('.message')
    .transition('fade')
  ;
})
;

//  Accordion
$('.ui.accordion')
.accordion({
  exclusive: false
})
;

// Put Comma In Number
function thousands_separators(num)
{
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}

// Only Number Input
function isNumberKey(evt){ 
var charCode = (evt.which) ? evt.which : event.keyCode 
if (charCode > 31 && (charCode < 48 || charCode > 57)) 
    return false; 
return true; 
} 

//  Live Calculation

function liveCalculation() {
// Input Variable Declaration
var manuscriptWordCount = document.getElementById("manuscriptWordCount").value;
var minimumWordCount = 18000;
var noOfImages = document.getElementById("noOfImages").value;
var noOfFNEN = document.getElementById("noOfFNEN").value;

//Default Values Declaration
if ((manuscriptWordCount == null) || (manuscriptWordCount == "")) { manuscriptWordCount = "0";}
else 
{ 
  manuscriptWordCount = parseInt(manuscriptWordCount.replace(/[^\d.-]/g, ''), 10); 
  manuscriptWordCount = thousands_separators(manuscriptWordCount);
  $('#manuscriptWordCount').val(manuscriptWordCount);
  manuscriptWordCount = manuscriptWordCount.replace(/[^\d.-]/g, '');

}

if ((noOfImages == null) || (noOfImages == "")) { noOfImages = "0";}
else 
{ 
  noOfImages = parseInt(noOfImages.replace(/[^\d.-]/g, ''), 10);
  noOfImages = thousands_separators(noOfImages);
  $('#noOfImages').val(noOfImages);
  noOfImages = noOfImages.replace(/[^\d.-]/g, ''); 

}

if ((noOfFNEN == null) || (noOfFNEN == "")) { noOfFNEN = "0";}
else 
{ 
  noOfFNEN = parseInt(noOfFNEN.replace(/[^\d.-]/g, ''), 10); 
  noOfFNEN = thousands_separators(noOfFNEN);
  $('#noOfFNEN').val(noOfFNEN);
  noOfFNEN = noOfFNEN.replace(/[^\d.-]/g, '');
}

//PRICE BASED ON 18,000 MINIMUM WORD COUNT
if ((manuscriptWordCount <= 18000) && (manuscriptWordCount > 0)) { manuscriptWordCount = minimumWordCount;}
var noOfElements = parseFloat(noOfImages) + parseFloat(noOfFNEN);

//Editing Services

    //Review Services Cost
    var reviewServicesCost = 0;
    var editingChecks = document.getElementById('editingChecks');
    var editingChecksCost = 30;
    var manuscriptEvaluation = document.getElementById('manuscriptEvaluation');
    var manuscriptEvaluationCost = 0.001785714;
    //Editing Services Cost
    var editingServicesCost = 0;
    var proofreading = document.getElementById('proofreading');
    var proofreadingCost = 0.0125;
    var developmentalEditing = document.getElementById('developmentalEditing');
    var developmentalEditingCost = 0.018;
    var copyediting = document.getElementById('copyediting');
    var copyeditingCost = 0.026;
    var lineEditing = document.getElementById('lineEditing');
    var lineEditingCost = 0.04;
    
    //CALCULATION
    if (proofreading.checked == true){
        editingServicesCost = proofreadingCost;
        totalEditingCost = parseFloat(editingServicesCost);
    }
    else if (developmentalEditing.checked == true){
        editingServicesCost = developmentalEditingCost;
        totalEditingCost = parseFloat(editingServicesCost);
    }
    else if (copyediting.checked == true){
        editingServicesCost = copyeditingCost;
        totalEditingCost = parseFloat(editingServicesCost);
    }
    else if (lineEditing.checked == true){
        editingServicesCost = lineEditingCost;
        totalEditingCost = parseFloat(editingServicesCost);
    }
    else {editingServicesCost = 0; totalEditingCost = parseFloat(editingServicesCost);}
    
    if (editingChecks.checked == true){
        reviewServicesCost = parseFloat(editingChecksCost) + (parseFloat(editingServicesCost) * parseFloat(manuscriptWordCount));
        totalEditingCost = parseFloat(reviewServicesCost);

        if ((proofreading.checked == true) || (developmentalEditing.checked == true) ||
            (copyediting.checked == true) || (lineEditing.checked == true))
        {
          totalEditingCost = parseFloat(totalEditingCost) - 30;
        }

    }
    else if (manuscriptEvaluation.checked == true){
        reviewServicesCost = (parseFloat(manuscriptWordCount) * parseFloat(manuscriptEvaluationCost)) +
                             (parseFloat(editingServicesCost) * parseFloat(manuscriptWordCount));
        totalEditingCost = parseFloat(reviewServicesCost);                     
    }
    else 
    {
      reviewServicesCost = 0; totalEditingCost = parseFloat(reviewServicesCost);
      if (proofreading.checked == true){
          editingServicesCost = parseFloat(proofreadingCost) * parseFloat(manuscriptWordCount);
          
          totalEditingCost = parseFloat(editingServicesCost);
      }
      else if (developmentalEditing.checked == true){
          editingServicesCost = parseFloat(developmentalEditingCost) * parseFloat(manuscriptWordCount);
          totalEditingCost = parseFloat(editingServicesCost);
      }
      else if (copyediting.checked == true){
          editingServicesCost = parseFloat(copyeditingCost) * parseFloat(manuscriptWordCount);
          totalEditingCost = parseFloat(editingServicesCost);
      }
      else if (lineEditing.checked == true){
          editingServicesCost = parseFloat(lineEditingCost) * parseFloat(manuscriptWordCount);
          totalEditingCost = parseFloat(editingServicesCost);
      }
      else {editingServicesCost = 0; totalEditingCost = parseFloat(editingServicesCost);}
      
      }

      // Free editing checks if editing service is selected


    var editingCost = document.getElementById('editingCost');
    editingCost.value = "$" + thousands_separators(parseFloat(totalEditingCost).toFixed(2));
    
//Formatting Design Services

    //Typesetting Service
      var typeSettingService = document.getElementById('typeSettingService');
      var typeSettingServiceCost = 0;
    
    //CALCULATION
      if (typeSettingService.checked == true)
      {
        if (parseFloat(noOfElements) <= 10) {
            typeSettingServiceCost = (parseFloat(manuscriptWordCount)/280)*1.2;
            var typeSettingCostText =  document.getElementById("typeSettingCostText");

            var typeSettingAdditionalTextLine = "Based on the number of images your typesetting service is <strong>Basic</strong>. Your book will be formatted using our template of your choice, including up to 10 images charts, graphs, endnotes, footnotes, etc.";
            var typeSettingAdditionalTextLine2 = "Turnaround Time: 10 business days";
      

            typeSettingCostText.innerHTML = typeSettingAdditionalTextLine + "<br><br>" + typeSettingAdditionalTextLine2;
            
            var typesettingCost = document.getElementById('typesettingCost');
            typesettingCost.value = "$" + thousands_separators(parseFloat(typeSettingServiceCost).toFixed(2));
           	
           	// THESE VARIABLES WILL NOT BE USED vvv
            var typeSettingCostText2 = document.getElementById("typeSettingCostText2");
            typeSettingCostText2.innerHTML = "";
            typeSettingCostText2.style.display = "none";
            // THESE VARIABLES WILL NOT BE USED ^^^


        }
        else if ((parseFloat(noOfElements) > 10) && (parseFloat(noOfElements) < 26 ) ) {
            typeSettingServiceCost = (parseFloat(manuscriptWordCount)/280)*1.4;
            var typeSettingCostText =  document.getElementById("typeSettingCostText");

            var typeSettingAdditionalTextLine = "Based on the number of images in your manuscript your typesetting service is <strong>Medium</strong>. Your book will be formatted using our template of your choice, including up to 25 images charts, graphs, endnotes, footnotes, etc.";
            var typeSettingAdditionalTextLine2 = "Turnaround Time: 15 business days";
      

            typeSettingCostText.innerHTML = typeSettingAdditionalTextLine + "<br><br>" + typeSettingAdditionalTextLine2;
            
            var typesettingCost = document.getElementById('typesettingCost');
            typesettingCost.value = "$" + thousands_separators(parseFloat(typeSettingServiceCost).toFixed(2));
           	
           	// THESE VARIABLES WILL NOT BE USED vvv
            var typeSettingCostText2 = document.getElementById("typeSettingCostText2");
            typeSettingCostText2.innerHTML = "";
            typeSettingCostText2.style.display = "none";
            // THESE VARIABLES WILL NOT BE USED ^^^
        }
        else {
            typeSettingServiceCost = "Based on the number of images in your manuscript your typesetting service is, <strong>Complex</strong>. We will need to quote this manually. One of our publishing consultants will reach out to you regarding your manuscript.";
            var typeSettingAdditionalTextLine = "This service is necessary for:";
            var typeSettingAdditionalTextLine2 = "<ul><li>Children’s books</li>";
            var typeSettingAdditionalTextLine3 = "<li>Textbooks</li>";
            var typeSettingAdditionalTextLine4 = "<li>Any book with more than 25 images, charts, graphs, footnotes, endnotes, etc.</li></ul>";
            var typeSettingAdditionalTextLine5 = "Turnaround Time: Quote: 4 business days | Project: 15 business days";


             
            var typeSettingCostText = document.getElementById("typeSettingCostText");
            typeSettingCostText.innerHTML = typeSettingServiceCost + "<br><br>" + typeSettingAdditionalTextLine + "<br>" + typeSettingAdditionalTextLine2 + typeSettingAdditionalTextLine3 + typeSettingAdditionalTextLine4 + "<br>" + typeSettingAdditionalTextLine5;

            var typesettingCost = document.getElementById('typesettingCost');
            typesettingCost.value = "";
            
            // THESE VARIABLES WILL NOT BE USED vvv
            var typeSettingCostText2 = document.getElementById("typeSettingCostText2");
            typeSettingCostText2.innerHTML = "";
            typeSettingCostText2.style.display = "none";
            // THESE VARIABLES WILL NOT BE USED ^^^

            typeSettingServiceCost = 0;
        }
      }
      else 
      {
        typeSettingServiceCost = 0;
        var typeSettingCostText =  document.getElementById("typeSettingCostText");
        typeSettingCostText.innerHTML = "Cost: $" + thousands_separators(parseFloat(typeSettingServiceCost).toFixed(2));
        var typesettingCost = document.getElementById('typesettingCost');
        typesettingCost.value = "$" + thousands_separators(parseFloat(typeSettingServiceCost).toFixed(2));
        var typeSettingCostText2 = document.getElementById("typeSettingCostText2");
            typeSettingCostText2.style.display = "none";
      }

      //eBook Conversion Service
      var eBookConversionService = document.getElementById('eBookConversionService');
      var eBookConversionServiceCost = 0;
      
      //CALCULATION
      if (eBookConversionService.checked == true)
      {
        if (parseFloat(noOfElements) <= 10) {
            eBookConversionServiceCost = (parseFloat(manuscriptWordCount)/280)*.7;

            var eBookConversionCostText =  document.getElementById("eBookConversionCostText");

            var eBookConversionTextLine = "Based on the number of images your eBook conversion service is <strong>Basic</strong>. Your book will be formatted using our template of your choice, including up to 10 images charts, graphs, endnotes, footnotes, etc.";
            var eBookConversionTextLine2 = "Turnaround Time: 10 business days";

           eBookConversionCostText.innerHTML = eBookConversionTextLine + "<br><br>" + eBookConversionTextLine2;

            var eBookConversionCost = document.getElementById('eBookConversionCost');
            eBookConversionCost.value = "$" + thousands_separators(parseFloat(eBookConversionServiceCost).toFixed(2));
            
           // THESE VARIABLES WILL NOT BE USED vvv
            var eBookConversionCostText2 = document.getElementById("eBookConversionCostText2");
            eBookConversionCostText2.innerHTML = eBookConversionServiceCost;
            eBookConversionCostText2.style.display = "none";
            // THESE VARIABLES WILL NOT BE USED ^^^	
        }
        else if ((parseFloat(noOfElements) > 10) && (parseFloat(noOfElements) < 26 )) {
          eBookConversionServiceCost = (parseFloat(manuscriptWordCount)/280)*.98;

          	var eBookConversionCostText =  document.getElementById("eBookConversionCostText");

            var eBookConversionTextLine = "Based on the number of images in your manuscript your typesetting service is <strong>Medium</strong>. Your book will be formatted using our template of your choice, including up to 25 images charts, graphs, endnotes, footnotes, etc.";
            var eBookConversionTextLine2 = "Turnaround Time: 15 business days";
      

            eBookConversionCostText.innerHTML = eBookConversionTextLine + "<br><br>" + eBookConversionTextLine2;

            var eBookConversionCost = document.getElementById('eBookConversionCost');
            eBookConversionCost.value = "$" + thousands_separators(parseFloat(eBookConversionServiceCost).toFixed(2));

            // THESE VARIABLES WILL NOT BE USED vvv
            var eBookConversionCostText2 = document.getElementById("eBookConversionCostText2");
            eBookConversionCostText2.innerHTML = eBookConversionServiceCost;
            eBookConversionCostText2.style.display = "none";
            // THESE VARIABLES WILL NOT BE USED ^^^	
        }
        else {
          
            eBookConversionServiceCost = "Based on the number of images in your manuscript your eBook conversion service is, <strong>Complex</strong>. We will need to quote this manually. One of our publishing consultants will reach out to you regarding your manuscript.";
            var eBookConversionTextLine = "This service is necessary for:";
            var eBookConversionTextLine2 = "<ul><li>Children’s books</li>";
            var eBookConversionTextLine3 = "<li>Textbooks</li>";
            var eBookConversionTextLine4 = "<li>Any book with more than 25 images, charts, graphs, footnotes, endnotes, etc.</li></ul>";
            var eBookConversionTextLine5 = "Turnaround Time: Quote: 4 business days | Project: 15 business days";

             
            var eBookConversionCostText = document.getElementById("eBookConversionCostText");
            eBookConversionCostText.innerHTML = eBookConversionServiceCost + "<br><br>" + eBookConversionTextLine + "<br>" + eBookConversionTextLine2 + eBookConversionTextLine3 + eBookConversionTextLine4 + "<br>" + eBookConversionTextLine5;

            eBookConversionServiceCost = "";
            var eBookConversionCost = document.getElementById('eBookConversionCost');
            eBookConversionCost.value = eBookConversionServiceCost;
            eBookConversionServiceCost = 0;

            // THESE VARIABLES WILL NOT BE USED vvv
            var eBookConversionCostText2 = document.getElementById("eBookConversionCostText2");
            eBookConversionCostText2.innerHTML = eBookConversionServiceCost;
            eBookConversionCostText2.style.display = "none";
            // THESE VARIABLES WILL NOT BE USED ^^^	
           
        }
      }
      else 
      {
        eBookConversionServiceCost = "";
            var eBookConversionCostText =  document.getElementById("eBookConversionCostText");
            eBookConversionCostText.innerHTML = "Cost: $" + thousands_separators(parseFloat(eBookConversionServiceCost).toFixed(2));
        
        eBookConversionServiceCost = 0;
            var eBookConversionCost = document.getElementById('eBookConversionCost');
            eBookConversionCost.value = "$" + thousands_separators(parseFloat(eBookConversionServiceCost).toFixed(2));
            var eBookConversionCostText2 = document.getElementById("eBookConversionCostText2");
            eBookConversionCostText2.style.display = "none";
      }

      //Cover Design Creation
      var coverDesignServiceCost = 0;
      var basicCoverDesign = document.getElementById('basicCoverDesign');
      var basicCoverDesignCost = 299;
      var premiumCoverDesign = document.getElementById('premiumCoverDesign');
      var premiumCoverDesignCost = 399;
      var coverDesignCreationServiceMain = document.getElementById('coverDesignCreationServiceMain');
     
      //CALCULATION
      if (coverDesignCreationServiceMain.checked == true)
      {
        if (basicCoverDesign.checked == true){
        coverDesignServiceCost = parseFloat(basicCoverDesignCost).toFixed(2);
        }
        else if (premiumCoverDesign.checked == true){
          coverDesignServiceCost = parseFloat(premiumCoverDesignCost).toFixed(2);
        }
        else {coverDesignServiceCost = 0;}
      }
      else{coverDesignServiceCost = 0;}
      var coverDesignCost = document.getElementById('coverDesignCost');
      coverDesignCost.value = "$" +  thousands_separators(parseFloat(coverDesignServiceCost).toFixed(2));
      
      //Illustration Service
      var illustrationServiceCost = 0;
      var basicIllustration = document.getElementById('basicIllustration');
      var basicIllustrationCost = 75;
      var deluxeIllustration = document.getElementById('deluxeIllustration');
      var deluxeIllustrationCost = 95;
      var premiumIllustration = document.getElementById('premiumIllustration');
      var premiumIllustrationCost = 145;
      var illustrationServiceMain = document.getElementById('illustrationServiceMain');
      var noOfIllustration = document.getElementById('noOfIllustration').value;
      if ((noOfIllustration == null) || (noOfIllustration == "")) { noOfIllustration = 0;}
     
      //CALCULATION
      if (illustrationServiceMain.checked == true)
      {
        if (basicIllustration.checked == true){
          illustrationServiceCost = parseFloat(basicIllustrationCost).toFixed(2)*parseFloat(noOfIllustration).toFixed(2);
        }
        else if (deluxeIllustration.checked == true){
          illustrationServiceCost = parseFloat(deluxeIllustrationCost).toFixed(2) * parseFloat(noOfIllustration).toFixed(2);
        }
        else if (premiumIllustration.checked == true){
          illustrationServiceCost = parseFloat(premiumIllustrationCost).toFixed(2) * parseFloat(noOfIllustration).toFixed(2);
        }
        else {illustrationServiceCost = 0;}
      }
      else{illustrationServiceCost = 0;}
      var illustrationCost = document.getElementById('illustrationCost');
      illustrationCost.value = "$" +  thousands_separators(parseFloat(illustrationServiceCost).toFixed(2));
      
      //Indexing Service
      var indexingServiceCost = 0;
      var basicIndexing = document.getElementById('basicIndexing');
      var basicIndexingCost = .4;
      var advancedIndexing = document.getElementById('advancedIndexing');
      var advancedIndexingCost = .6;
      var conceptIndexing = document.getElementById('conceptIndexing');
      var conceptIndexingCost = "";
      var indexingServiceMain = document.getElementById('indexingServiceMain');
      var noOfKeywords = document.getElementById('noOfKeywords').value;
      var indexingCostText = document.getElementById('indexingCostText');
      if ((noOfKeywords == null) || (noOfKeywords == "")) { noOfKeywords = 0;}
     
      //CALCULATION
      if (indexingServiceMain.checked == true)
      {
        if (basicIndexing.checked == true){
          indexingServiceCost = parseFloat(basicIndexingCost).toFixed(2)*parseFloat(noOfKeywords).toFixed(2);
          indexingCostText.innerHTML = "";
          indexingCostText.style.display = "none";
        }
        else if (advancedIndexing.checked == true){
          indexingServiceCost = parseFloat(advancedIndexingCost).toFixed(2) * parseFloat(noOfKeywords).toFixed(2);
          indexingCostText.innerHTML = "";
          indexingCostText.style.display = "none";
        }
        else if (conceptIndexing.checked == true){
          
          indexingCostServiceCost = "This is for Quote base on your selection. One of our publishing consultants will contact you.";
          indexingCostText.innerHTML = indexingCostServiceCost;
          indexingCostText.style.display = "block";
          indexingServiceCost = "";
        }
        else
        {
        indexingCostServiceCost = "";
        indexingCostText.innerHTML = indexingCostServiceCost;
        indexingCostText.style.display = "none";
        indexingServiceCost = 0;
        }
        
      }
      else
      {
        indexingCostServiceCost = "";
        indexingCostText.innerHTML = indexingCostServiceCost;
        indexingCostText.style.display = "none";
        indexingServiceCost = 0;
      }

      var indexingCost = document.getElementById('indexingCost');
      if (indexingServiceCost == "")
      {
        indexingCost.value = indexingServiceCost;
        indexingCostText.style.display = "block";
        indexingServiceCost = 0;
        indexingCost.value = "";
      }
      else
      {
        indexingCost.value = "$" +  thousands_separators(parseFloat(indexingServiceCost).toFixed(2));
        indexingCostText.style.display = "none";
        
      }

//Distribution Services
var distributionServicesCost = 0;
var distribution1 = document.getElementById('distribution1');
var distribution1Cost = 239.99;
var distribution2 = document.getElementById('distribution2');
var distribution2Cost = 214.99;
var distribution3 = document.getElementById('distribution3');
var distribution3Cost = 179.99;
var totalDistributionCost = 0;

//CALCULATION
if (distribution1.checked == true){
  distributionServicesCost = distribution1Cost;
    totalDistributionCost = parseFloat(distributionServicesCost).toFixed(2);
}
else if (distribution2.checked == true){
  distributionServicesCost = distribution2Cost;
    totalDistributionCost = parseFloat(distributionServicesCost).toFixed(2);
}
else if (distribution3.checked == true){
  distributionServicesCost = distribution3Cost;
    totalDistributionCost = parseFloat(distributionServicesCost).toFixed(2);
}
else {distributionServicesCost = 0; totalDistributionCost = parseFloat(distributionServicesCost).toFixed(2);}
var distributionCost = document.getElementById('distributionCost');
distributionCost.value = "$" +  thousands_separators(parseFloat(totalDistributionCost).toFixed(2));
// TOTAL COST
var total = document.getElementById('totalCost');
var bundleDiscount = document.getElementById('bundleDiscount');
var bundlePrice= document.getElementById('bundlePrice');
var totalCost = parseFloat(totalEditingCost) +
                parseFloat(typeSettingServiceCost) + parseFloat(eBookConversionServiceCost) +
                parseFloat(coverDesignServiceCost) + parseFloat(illustrationServiceCost) +
                parseFloat(indexingServiceCost)+
                parseFloat(totalDistributionCost);
total.value = "$" + thousands_separators(parseFloat(totalCost).toFixed(2));

//DISCOUNT

// if ((totalCost >= 720) && (totalCost <= 1300))
// {
//   bundleDiscount.value = "7%";
//   discounted = parseFloat(totalCost) - (parseFloat(totalCost) * .07);
//   bundlePrice.value = "$" + parseFloat(discounted).toFixed(2);
// }
// else if ( totalCost >= 1300)
// {
//   bundleDiscount.value = "10%";
//   discounted = parseFloat(totalCost) - (parseFloat(totalCost) * .10);
//   bundlePrice.value = "$" + parseFloat(discounted).toFixed(2); 
// }
if (totalCost > 1000 )
{
  bundleDiscount.value = "5%";
  discounted = parseFloat(totalCost) - (parseFloat(totalCost) * .05);
  bundlePrice.value = "$" + thousands_separators(parseFloat(discounted).toFixed(2));
}
else
{
  bundleDiscount.value = "0%";
  bundlePrice.value = "$" + thousands_separators(parseFloat(totalCost).toFixed(2));  
}
}

//  Formatting/Design Service Selection
function selectFormattingDesignService() {
// Get the formatting design services
var typeSettingService = document.getElementById("typeSettingService");
var eBookConversionService = document.getElementById("eBookConversionService");
var coverDesignCreationServiceMain = document.getElementById("coverDesignCreationServiceMain");
var illustrationServiceMain = document.getElementById("illustrationServiceMain");
var indexingServiceMain = document.getElementById("indexingServiceMain");
// Get the service description 
var typeSettingServiceDIV = document.getElementById("typeSettingServiceDIV");
var eBookConversionServiceDIV = document.getElementById("eBookConversionServiceDIV");
var coverDesignCreationDIV = document.getElementById("coverDesignCreationDIV");
var illustrationServiceDIV = document.getElementById("illustrationServiceDIV");
var indexingServiceDIV = document.getElementById("indexingServiceDIV");

// If the checkbox is checked, display the output service description

//Typesetting Service
if (typeSettingService.checked == true){
  typeSettingServiceDIV.style.display = "block";
} 
else {
  typeSettingServiceDIV.style.display = "none";
}
//eBook Conversion Service
if (eBookConversionService.checked == true){
  eBookConversionServiceDIV.style.display = "block";
} 
else {
  eBookConversionServiceDIV.style.display = "none";
}
//Cover Design Creation
if (coverDesignCreationServiceMain.checked == true){
  coverDesignCreationDIV.style.display = "block";
} 
else {
  coverDesignCreationDIV.style.display = "none";
}
//Illustration Service
if (illustrationServiceMain.checked == true){
  illustrationServiceDIV.style.display = "block";
} 
else {
  illustrationServiceDIV.style.display = "none";
}
//Indexing Service
if (indexingServiceMain.checked == true){
  indexingServiceDIV.style.display = "block";
} 
else {
  indexingServiceDIV.style.display = "none";
}

}

// START OF RADIO DESELECTION SCRIPT//

var editingChecksCount =  0;
var manuscriptEvaluationCount = 0;

var proofreadingCount = 0;
var developmentalEditingCount = 0;
var copyeditingCount = 0;
var lineEditingCount = 0;

var typeSettingCount = 0;
var eBookConversionCount = 0;
var coverDesignCreationCount = 0;

var basicCoverDesignCount = 0;
var premiumCoverDesignCount = 0;

var illustrationCount = 0;

var basicIllustrationCount = 0;
var deluxeIllustrationCount = 0;
var premiumIllustrationCount = 0;

var indexingCount = 0;

var basicIndexingCount = 0;
var advancedIndexingCount = 0;
var conceptIndexingCount = 0;

var distribution1Count = 0;
var distribution2Count = 0;
var distribution3Count = 0;

var editingChecks =  document.getElementById("editingChecks");
var manuscriptEvaluation = document.getElementById("manuscriptEvaluation");

var proofreading = document.getElementById("proofreading");
var developmentalEditing = document.getElementById("developmentalEditing");
var copyediting = document.getElementById("copyediting");
var lineEditing = document.getElementById("lineEditing");

var typeSettingService = document.getElementById("typeSettingService");
var eBookConversionService = document.getElementById("eBookConversionService");
var coverDesignCreationServiceMain = document.getElementById("coverDesignCreationServiceMain");

var basicCoverDesign = document.getElementById("basicCoverDesign");
var premiumCoverDesign =document.getElementById("premiumCoverDesign");

var illustrationServiceMain = document.getElementById("illustrationServiceMain");

var basicIllustration = document.getElementById("basicIllustration");
var deluxeIllustration = document.getElementById("deluxeIllustration");
var premiumIllustration = document.getElementById("premiumIllustration");

var indexingServiceMain = document.getElementById("indexingServiceMain");

var basicIndexing = document.getElementById("basicIndexing");
var advancedIndexing = document.getElementById("advancedIndexing");
var conceptIndexing = document.getElementById("conceptIndexing");

var distribution1 = document.getElementById("distribution1");
var distribution2 = document.getElementById("distribution2");
var distribution3 = document.getElementById("distribution3");


var typeSettingServiceDIV = document.getElementById("typeSettingServiceDIV");
var eBookConversionServiceDIV = document.getElementById("eBookConversionServiceDIV");
var coverDesignCreationDIV = document.getElementById("coverDesignCreationDIV");
var illustrationServiceDIV = document.getElementById("illustrationServiceDIV");
var indexingServiceDIV = document.getElementById("indexingServiceDIV");

function deselectEditingChecks() {
  editingChecksCount++;
  manuscriptEvaluationCount = 0;
  if (editingChecksCount == 2)
  {
    editingChecks.checked = false;
    editingChecksCount = 0;
  }
}

function deselectManuscriptEvaluation() {
  editingChecksCount = 0;
  manuscriptEvaluationCount++;
  if (manuscriptEvaluationCount == 2)
  {
    manuscriptEvaluation.checked = false;
    manuscriptEvaluationCount = 0;
  }
}

function deselectProofreading() {
  proofreadingCount++;
  developmentalEditingCount = 0;
  copyediting = 0;
  lineEditing = 0;
  if (proofreadingCount == 2)
  {
    proofreading.checked = false;
    proofreadingCount = 0;
  }
}

function deselectDevelopmentalEditing() {
  developmentalEditingCount++;
  proofreadingCount = 0;
  copyediting = 0;
  lineEditing = 0;
  if (developmentalEditingCount == 2)
  {
    developmentalEditing.checked = false;
    developmentalEditingCount = 0;
  }
}

function deselectCopyediting() {
  copyeditingCount++;
  proofreadingCount = 0;
  developmentalEditingCount = 0;
  lineEditing = 0;
  if (copyeditingCount == 2)
  {
    copyediting.checked = false;
    copyeditingCount = 0;
  }
}

function deselectLineEditing() {
  lineEditingCount++;
  proofreadingCount = 0;
  developmentalEditingCount = 0;
  copyeditingCount = 0;
  if (lineEditingCount == 2)
  {
    lineEditing.checked = false;
    lineEditingCount = 0;
  }
}

function deselectTypsettingService() {
  typeSettingCount++;
  if (typeSettingCount == 2)
  {
    typeSettingService.checked = false;
    typeSettingServiceDIV.style.display = "none";
    typeSettingCount = 0;
  }
}

function deselecteBookConversionService() {
  eBookConversionCount++;
  if (eBookConversionCount == 2)
  {
    eBookConversionService.checked = false;
    eBookConversionServiceDIV.style.display = "none";
    eBookConversionCount = 0;
  }
}

function deselectCoverDesignCreationServiceMain() {
  coverDesignCreationCount++;
  if (coverDesignCreationCount == 2)
  {
    coverDesignCreationServiceMain.checked = false;
    coverDesignCreationDIV.style.display = "none";
    coverDesignCreationCount = 0;
  }
}

function deselectBasicCoverDesign() {
  basicCoverDesignCount++;
  premiumCoverDesignCount = 0;
  if (basicCoverDesignCount == 2)
  {
    basicCoverDesign.checked = false;
    basicCoverDesignCount = 0;
  }
}

function deselectPremiumCoverDesign() {
  basicCoverDesignCount = 0;
  premiumCoverDesignCount++;
  if (premiumCoverDesignCount == 2)
  {
    premiumCoverDesign.checked = false;
    premiumCoverDesignCount = 0;
  }
}


function deselectIllustrationServiceMain() {
  illustrationCount++;
  if (illustrationCount == 2)
  {
    illustrationServiceMain.checked = false;
    illustrationServiceDIV.style.display = "none";
    illustrationCount = 0;
  }
}

function deselectBasicIllustration() {
  basicIllustrationCount++;
  deluxeIllustrationCount = 0;
  premiumIllustrationCount = 0;
  if (basicIllustrationCount == 2)
  {
    basicIllustration.checked = false;
    basicIllustrationCount = 0;
  }
}

function deselectDeluxeIllustration() {
  basicIllustrationCount = 0;
  deluxeIllustrationCount++;
  premiumIllustrationCount = 0;
  if (deluxeIllustrationCount == 2)
  {
    deluxeIllustration.checked = false;
    deluxeIllustrationCount = 0;
  }
}

function deselectPremiumIllustration() {
  basicIllustrationCount = 0;
  deluxeIllustrationCount = 0;
  premiumIllustrationCount++;
  if (premiumIllustrationCount == 2)
  {
    premiumIllustration.checked = false;
    premiumIllustrationCount = 0;
  }
}

function deselectIndexingServiceMain() {
  indexingCount++;
  if (indexingCount == 2)
  {
    indexingServiceMain.checked = false;
    indexingServiceDIV.style.display = "none";
    indexingCount = 0;
  }
}

function deselectBasicIndexing() {
  basicIndexingCount++;
  advancedIndexingCount = 0;
  conceptIndexingCount = 0;
  if (basicIndexingCount == 2)
  {
    basicIndexing.checked = false;
    basicIndexingCount = 0;
  }
}

function deselectAdvancedIndexing() {
  basicIndexingCount = 0;
  advancedIndexingCount++;
  conceptIndexingCount = 0;
  if (advancedIndexingCount == 2)
  {
    advancedIndexing.checked = false;
    advancedIndexingCount = 0;
  }
}

function deselectConceptIndexing() {
  basicIndexingCount = 0;
  advancedIndexingCount = 0;
  conceptIndexingCount++;
  if (conceptIndexingCount == 2)
  {
    conceptIndexing.checked = false;
    conceptIndexingCount = 0;
  }
}

function deselectDistribution1() {
  distribution1Count++;
  distribution2Count = 0;
  distribution3Count = 0;
  if (distribution1Count == 2)
  {
    distribution1.checked = false;
    distribution1Count = 0;
  }
}

function deselectDistribution2() {
  distribution1Count = 0;
  distribution2Count++;
  distribution3Count = 0;
  if (distribution2Count == 2)
  {
    distribution2.checked = false;
    distribution2Count = 0;
  }
}

function deselectDistribution3() {
  distribution1Count = 0;
  distribution2Count = 0;
  distribution3Count++;
  if (distribution3Count == 2)
  {
    distribution3.checked = false;
    distribution3Count = 0;
  }
}


// END OF RADIO DESELECTION SCRIPT//


//  Reset Button
function resetForm() {
  location.reload();
}

//  Phone Number
$(function () {
  $('#phone').keydown(function (e) {
   var key = e.charCode || e.keyCode || 0;
   $text = $(this); 
   // if (key !== 8 && key !== 9) {
   //     if ($text.val().length === 3) {
   //         $text.val($text.val() + '-');
   //     }
   //     if ($text.val().length === 7) {
   //         $text.val($text.val() + '-');
   //     }
   // }
   return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
})
});