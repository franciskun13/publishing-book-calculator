<?php
     session_start();
     
     $firstName = $_POST['firstName'];
     $lastName = $_POST['lastName']; 
     $email = $_POST['email'];
     $phone = $_POST['phone']; 
     
     $bookTitle = $_POST['bookTitle']; 
     $manuscriptWordCount = $_POST['manuscriptWordCount']; 
     $noOfImages = $_POST['noOfImages']; 
     $noOfFNEN = $_POST['noOfFNEN'];
     
     if (isset($_POST['reviewServices'])){ $reviewServices = $_POST['reviewServices'];}
     else { $reviewServices = "NONE";}
     if (isset($_POST['editingServices'])){ $editingServices = $_POST['editingServices'];}
     else { $editingServices = "NONE";}
     if (isset($_POST['editingCost'])){ $editingCost = $_POST['editingCost'];}
     else { $editingCost = "NONE";}
     
     if (isset($_POST['typeSettingService'])){ $typeSettingService = $_POST['typeSettingService'];}
     else { $typeSettingService = "NONE";}
     
     if (isset($_POST['typesettingCost'])){ $typesettingCost = $_POST['typesettingCost'];}
     else { $typesettingCost = "";}
     if (isset($_POST['eBookConversionService'])){ $eBookConversionService = $_POST['eBookConversionService'];}
     else { $eBookConversionService = "NONE";}
     if (isset($_POST['eBookConversionCost'])){ $eBookConversionCost = $_POST['eBookConversionCost'];}
     else { $eBookConversionCost = "";}
     if (isset($_POST['coverDesignCreation'])){ $coverDesignCreation = $_POST['coverDesignCreation'];}
     else { $coverDesignCreation = "NONE";}
     if (isset($_POST['coverDesignCost'])){ $coverDesignCost = $_POST['coverDesignCost'];}
     else { $coverDesignCost = "";}
     if (isset($_POST['illustrationService'])){ $illustrationService = $_POST['illustrationService'];}
     else { $illustrationService = "NONE";}
     if (isset($_POST['noOfIllustration'])){ $noOfIllustration = $_POST['noOfIllustration'];}
     else { $noOfIllustration = "";}
     if (isset($_POST['illustrationCost'])){ $illustrationCost = $_POST['illustrationCost'];}
     else { $illustrationCost = "";}
     if (isset($_POST['indexingService'])){ $indexingService = $_POST['indexingService'];}
     else { $indexingService = "NONE";}
     if (isset($_POST['noOfKeywords'])){ $noOfKeywords = $_POST['noOfKeywords'];}
     else { $noOfKeywords = "";}
     if (isset($_POST['indexingCost'])){ $indexingCost = $_POST['indexingCost'];}
     else { $indexingCost = "";}
     if (isset($_POST['distributionServices'])){ $distributionServices = $_POST['distributionServices'];}
     else { $distributionServices = "";}
     if (isset($_POST['distributionCost'])){ $distributionCost = $_POST['distributionCost'];}
     else { $distributionCost = "";}
     
     if (isset($_POST['totalCost'])){ $totalCost = $_POST['totalCost'];}
     else { $totalCost = "";}
     if (isset($_POST['bundleDiscount'])){ $bundleDiscount = $_POST['bundleDiscount'];}
     else { $bundleDiscount = "";}
     if (isset($_POST['bundlePrice'])){ $bundlePrice = $_POST['bundlePrice'];}
     else { $bundlePrice = "";}


     $to = "francisjohn.banlasan@gmail.com"; //gets the user email address 
          $subject = "2Nimble Service Cost Calculator Form Submission";
          $message = "

          <html style=\"background-color: #e6e6e6; font-family: 'Nunito', sans-serif;\">
          <div style=\"background-color: white; margin-left: auto; margin-right: auto; margin-top: 50px; margin-bottom:50px; width: 750px; padding: 50px 50px 15px 50px; font-size:13px; border-radius: 25px;\">
          
          <h1 style=\"font-size: 20px; color: #00AEF0;\">Personal Information</h1>
          <hr>
          <p><strong>First Name:</strong> ". $firstName ."</p>
          <p><strong>Last Name:</strong> ". $lastName ." </p>
          <p><strong>Email:</strong> ". $email ." </p>
          <p><strong>Phone:</strong> ". $phone ." </p>
          <hr>
          <p>&nbsp;</p>
          <h1 style=\"font-size: 20px; color: #00AEF0;\">Book Information</h1>
          <hr>
          <p><strong>Book Title:</strong> ". $bookTitle ." </p>
          <p><strong>Manuscript Word Count:</strong> ". $manuscriptWordCount ." </p>
          <p><strong>No. of images in the manuscript:</strong> ". $noOfImages ." </p>
          <p><strong>No. of footnotes and end-notes in the manuscript:</strong> ". $noOfFNEN ." </p>
          <hr>
          <p>&nbsp;</p>
          <h1 style=\"font-size: 20px; color: #00AEF0;\">Services</h1>
          <hr>
          
          <h1 style=\"font-size: 15px; color: green;\">Editing Services</h1>
          <p><strong>Review Service:</strong> ". $reviewServices ." </p>
          <p><strong>Editing Service:</strong> ". $editingServices ." </p>
          <p><strong>Editing Cost:</strong> ". $editingCost ." </p>
          
          <p>&nbsp;</p>
          
          <h1 style=\"font-size: 15px; color: green;\">Formatting/Design Services</h1>
           
          <p><strong>Typesetting Service:</strong> ". $typeSettingService ." </p>
          <p><strong>Typesetting Service Cost:</strong> ". $typesettingCost ." </p>
    
          <p>&nbsp;</p>
          <p><strong>eBook Conversion Service:</strong> ". $eBookConversionService ." </p>
          <p><strong>eBook Conversion Service Cost:</strong> ". $eBookConversionCost ." </p>
    
          <p>&nbsp;</p>
          <p><strong>Cover Design Creation:</strong> ". $coverDesignCreation ." </p>
          <p><strong>Cover Design Creation Cost:</strong> ". $coverDesignCost ." </p>
    
          <p>&nbsp;</p>
          <p><strong>Illustration Service:</strong> ". $illustrationService ." </p>
          <p><strong>No. of Illustrations:</strong> ". $noOfIllustration ." </p>
          <p><strong>Illustration Service Cost:</strong> ". $illustrationCost ." </p>
    
          <p>&nbsp;</p>
          <p><strong>Indexing Service:</strong> ". $indexingService ." </p>
          <p><strong>No. of Keywords:</strong> ". $noOfKeywords ." </p>
          <p><strong>Indexing Service Cost:</strong> ". $indexingCost ." </p>
    
          <p>&nbsp;</p>
          <h1 style=\"font-size: 15px; color: green;\">Distribution Services</h1>
          <p><strong>Distribution Service:</strong> ". $distributionServices ." </p>
          <p><strong>Distribution Cost:</strong> ". $distributionCost ." </p>
          
          <hr>
          <p>&nbsp;</p>
          <h1 style=\"font-size: 20px; color: #00AEF0;\">Services Total</h1>
          <hr>
          <p><strong>Subtotal:</strong> ". $totalCost ." </p>
          <p><strong>Bundle Discount:</strong> ". $bundleDiscount ." </p>
          <p><strong>Total:</strong> ". $bundlePrice ." </p>
          <hr>
          </div>
         
          </html>
          ";
          $headers = "From: ".$firstName." ".$lastName." <".$email.">\r\n";
          // $headers .= "Bcc: info@2nimble.com\r\n";
          $headers .= "Reply-To: francisjohn.banlasan@gmail.com \r\n";
          $headers .= "Organization: Sender Organization\r\n";
          $headers .= "MIME-Version: 1.0\r\n";
          $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
          $headers .= "X-Priority: 3\r\n";
          $headers .= "X-Mailer: PHP". phpversion() ."\r\n" ;
        
     if (mail($to,$subject,$message,$headers)){

          $_SESSION['success'] = "TRUE";
          header("Location: https://franbansan.com/calculator");

     }
 
      //info@2nimble.com
?>