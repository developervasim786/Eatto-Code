<script
  src="https://code.jquery.com/jquery-3.6.3.min.js"
  integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
  crossorigin="anonymous"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js" ></script>
<script>

var url = window.location.href;

//if(url.includes("gift-card") == false ){

  future_open_days_count = +2;

  const slots = [];
  
  slots["Monday"]     = "09:00 - 15:00";
  slots["Tuesday"]    = "12:00 - 18:00";
  slots["Wednesday"]  = "18:00 - 22:00";
  slots["Thursday"]   = "12:00 - 18:00";
  slots["Friday"]     = "09:00 - 15:00";

  const hollydayArr = [
    "11",
    "32",
    "173",
    "214",
    "55",
    "26",
    "48",
    "2710",
    "2512",
    "2612"
  ];


  jQuery(document).ready(function(){

    setTimeout(() => {
      jQuery('select[name="country"]').trigger("change");
      console.log("Trigger Country Field");
    }, 1000);

    setTimeout(() => {
      //jQuery('select[name="state"]').trigger("change");
      jQuery('#zs-shipping-address-states').trigger("change");
      console.log("Trigger State Field");
    }, 1000);

    console.log("This is testing for profile page");
  
  jQuery("#tax_form .theme-continue-btn").append('<a href="javascript:void(0);" class="checkout-button">Continue</a>');

  jQuery("#zs-address-box-form .theme-continue-btn").append('<a href="javascript:void(0);" class="checkout-button">Continue</a>');

    jQuery(document).on('click', '.checkout-button', function() {
        
      if(url.includes("gift-card") == false ) 
      {

        jQuery(".dpd-error").remove();
        
        form_error = false;

        

        if( jQuery(".theme-portal-username").text() != "" ){
          
          // for login user

          // #zs-address-fields will not be empty if customer select add new address form

          if( jQuery("#zs-address-fields").text() == "" ){



                label_for = jQuery(".select-address:checked").attr("id");

                full_address = jQuery('label[for="'+label_for+'"]').next().text();

                address_arr = full_address.split(",");
                var dublin_index = (address_arr.length-3);
                //console.log(address_arr);
                if( address_arr[dublin_index].includes("Dublin") ){
                    console.log("It's Dublin");

                    if( jQuery("#dublin-type option:selected").val() == "" ){
                        form_error = true;
                        jQuery("#dublin-type").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
                    }else{
                        jQuery("#delivery-date .dpd-error").remove();
                    }

                    if( jQuery("#delivery-date").val() == "" ){
                        form_error = true;
                        jQuery("#delivery-date").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
                    }else{
                        jQuery("#delivery-date .dpd-error").remove();
                    }


                    if( jQuery(".cf-slot").val() == "" ){
                        form_error = true;
                        jQuery(".cf-slot").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
                    }else{
                        jQuery(".cf-slot .dpd-error").remove();
                    }


                }else{
                    console.log("It's not Dublin");

                    if( jQuery("#dpd_dispatch_date").val() == "" ){
                        form_error = true;
                        jQuery("#dpd_dispatch_date").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
                    }

                }

                if( form_error != true ){
                    jQuery("#tax_form .zpbutton").trigger("click");
                    jQuery("#zs-coupon-form").show();
                }

            }else{

            // for add new address user

            if( jQuery('#zs-shipping-address-states option:selected').text() != "Dublin" ){

                var selected_country = jQuery('#zs-shipping-address-country option:selected').text();

                if( selected_country == "United Kingdom" ){

                  // if country is UK

                  if( jQuery("#uk-conty").val() == "" ){
                      form_error = true;
                      jQuery("#uk-conty").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
                  }
                }

                
                if( jQuery("#dpd_dispatch_date").val() == "" ){
                    form_error = true;
                    jQuery("#dpd_dispatch_date").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
                }

            }else if( jQuery('#zs-shipping-address-states option:selected').text() == "Dublin" ){
                
                if( jQuery("#dublin-type option:selected").val() == "" ){
                    form_error = true;
                    jQuery("#dublin-type").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
                }else{
                    jQuery("#delivery-date .dpd-error").remove();
                }

                if( jQuery("#delivery-date").val() == "" ){
                    form_error = true;
                    jQuery("#delivery-date").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
                }else{
                    jQuery("#delivery-date .dpd-error").remove();
                }


                if( jQuery(".cf-slot").val() == "" ){
                    form_error = true;
                    jQuery(".cf-slot").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
                }else{
                    jQuery(".cf-slot .dpd-error").remove();
                }
            }

            if( form_error != true ){
                jQuery("#tax_form .zpbutton").trigger("click");
                jQuery("#zs-coupon-form").show();
            }

            }

            //////////////////////////////////////////////////////////

        }else{

          // for guest user

          if( jQuery('#zs-shipping-address-states option:selected').text() != "Dublin" ){



              var selected_country = jQuery('#zs-shipping-address-country option:selected').text();

              if( selected_country == "United Kingdom" ){

                // if country is UK

                if( jQuery("#uk-conty").val() == "" ){
                    form_error = true;
                    jQuery("#uk-conty").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
                }
              }
              
              if( jQuery("#dpd_dispatch_date").val() == "" ){
                  form_error = true;
                  jQuery("#dpd_dispatch_date").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
              }

          }else if( jQuery('#zs-shipping-address-states option:selected').text() == "Dublin" ){
              
              if( jQuery("#dublin-type option:selected").val() == "" ){
                  form_error = true;
                  jQuery("#dublin-type").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
              }else{
                  jQuery("#delivery-date .dpd-error").remove();
              }

              if( jQuery("#delivery-date").val() == "" ){
                  form_error = true;
                  jQuery("#delivery-date").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
              }else{
                  jQuery("#delivery-date .dpd-error").remove();
              }

              if( jQuery("#dublin-type option:selected").val() != "North County Dublin" ){

                if( jQuery(".cf-slot").val() == "" ){
                    form_error = true;
                    jQuery(".cf-slot").after('<span class="dpd-error" style="color:#E54D42;white-space:normal;">Cannot be empty</span>');
                }else{
                    jQuery(".cf-slot .dpd-error").remove();
                }
              }
          }

          if( form_error != true ){
              jQuery("#tax_form .zpbutton").trigger("click");
              jQuery("#zs-coupon-form").show();
          }

        }

        
      }else{
        jQuery("#tax_form .zpbutton").trigger("click");
        jQuery("#zs-coupon-form").show();
      }

    });


  if(url.includes("gift-card") == false ) 
  {

    jQuery('.theme-cart-details-summary-total-wrap').after('<p class="uk-block" style="display:none;"><label>Select ( North Ireland Counties ): <span style="color:red;">*</span></label><select id="uk-conty"><option value="">- Select -</option><option value="Antrim">Antrim</option><option value="Belfast">Belfast</option><option value="Down">Down</option><option value="Armagh">Armagh</option><option value="Derry/Londonderry">Derry/Londonderry</option><option value="Tyrone">Tyrone</option><option value="Fermanagh">Fermanagh</option></select></p><p class="dpd-panel"><label>DPD DISPATCH DATE (not delivery date) <span style="color:red;">*</span> </label><input readonly name="dpd_dispatch_date" id="dpd_dispatch_date" type="text" class="theme-input-field-width theme-checkout-input cf-delivery-date" value=""  autocomplete="off"></p><p class="dl-panel"><label>Select (Dublin City North / Dublin City South / North County Dublin): <span style="color:red;">*</span></label><select id="dublin-type"><option value="">- Select -</option><option value="Dublin North">Dublin City North</option><option value="Dublin South">Dublin City South</option><option value="North County Dublin">North County Dublin</option></select></p><p class="dl-panel"><label class="non-dpd-label">Select your delivery day below : <span style="color:red;">*</span></label><label class="dpd-label" style="display:none;">DPD DISPATCH DATE (not delivery date) : <span style="color:red;">*</span></label><input readonly disabled name="Delivery_Date" id="delivery-date" type="text" class="theme-input-field-width theme-checkout-input cf-delivery-date" value=""  autocomplete="off"><br><span style="display:none;font-size: 12px;" class="dpd-label">North county Dublin orders are now shipped with DPD and will be delivered one day after the selected dispatch date. Please email info@eatto.ie for more information.</span></p><p class="dl-panel cf-slot-con"><label>Select your time slot below : <span style="color:red;">*</span></label><select disabled class="theme-input-field-width theme-checkout-input cf-slot" ><option value=""> - Select Slot - </option></select></p>');

  }

  // add order notes
  jQuery("#zs-shipping-telephone").after('<label style="margin-top: 20px;" class="theme-text-color-light">Gift message/Delivery note</label><textarea id="c-order-notes" class="" style="padding: 10px 10px;" ></textarea>');

  jQuery(".add-address").after('<br><label style="margin-top: 20px;" class="theme-text-color-light">Gift message/Delivery note</label><textarea id="c-order-notes" class="" style="padding: 10px 10px;" ></textarea>');

  jQuery(document).on('click', '.add-address', function() {
    
    jQuery(".dl-panel").hide();
    jQuery(".dpd-panel").show();

    setTimeout(() => {
      
      jQuery("#c-order-notes").remove();

      jQuery("#zs-shipping-telephone").after('<label style="margin-top: 20px;" class="theme-text-color-light">Order Note</label><textarea id="c-order-notes" class="" style="padding: 10px 10px;" ></textarea>');

      console.log("Order Notes field adding after order notes.");

    }, 1000);

  });

  jQuery(".dl-panel").hide();

  jQuery(".theme-checkout-breadcrum").after('<input type="hidden" id="full-time-slot" value="" />');
  jQuery(".theme-checkout-breadcrum").after('<textarea id="hided-order-notes" style="display:none;" ></textarea>');

  // check for date is empty or not
  console.log("Full Time Slot Value - "+jQuery("#full-time-slot").val());

  console.log("Portal User Name - "+jQuery(".theme-portal-username").text());

  setTimeout(() => {
    
    if( jQuery(".theme-portal-username").text() != "" ){

      // for login user

      /*if( jQuery("#full-time-slot").val() == null || jQuery("#full-time-slot").val() == "" ){
        console.log("Date field Empty Redirect to Main Checkout");
        
        jQuery("#full-time-slot").val("Redirected");
        // Trigger Change Address Click
        jQuery(".theme-checkout-list-edit-btn .zpbutton").trigger("click");
        console.log("Change Address Clicked!");
      }*/
    
    }else{

      // for guest user

      if( jQuery("#full-time-slot").val() == null || jQuery("#full-time-slot").val() == "" ){
        console.log("Date field Empty Redirect to Main Checkout");
        
        jQuery("#full-time-slot").val("Redirected");
        // Trigger Change Address Click
        jQuery(".theme-checkout-list-edit-btn .zpbutton").trigger("click");
        console.log("Change Address Clicked!");
      }
    }

  }, 2000);

  

  // order notes keyup
    jQuery(document).on('keyup', '#c-order-notes', function() {

      var c_order_notes = jQuery("#c-order-notes").val();

      jQuery("#hided-order-notes").val(c_order_notes);

      jQuery.cookie("hided_order_notes",c_order_notes,{ expires: 2, path: '/' });

      console.log("Value adding to hided order notes...");
    });

    jQuery( function() {

        var current_time = new Date().toLocaleTimeString(); // 11:18:48 AM
        min_date = 0;
        dub_min_date = 0;

        min_date = 1;
        dub_min_date = 1;

        jQuery( "#delivery-date" ).datepicker(
            { 
            minDate: dub_min_date,
            beforeShowDay:function(date){ 
            var day = date.getDay(); 
            var d_date = date.getDate(); 
            var d_month = date.getMonth()+1; 
            holiday_date_month = d_date+""+d_month;
            

            return [(day != 0 && day != 6 && day != 1 && day != 4 && hollydayArr.includes(holiday_date_month) != true  ),''] 
            }
        });

        jQuery( "#dpd_dispatch_date" ).datepicker(
            { 
                minDate: min_date,
                beforeShowDay:function(date){ 
                    var day         = date.getDay(); 
                    var d_date      = date.getDate(); 
                    var d_month     = date.getMonth()+1;
                    var fullYear    = date.getFullYear();

                    holiday_date_month = d_date+""+d_month;

                    var fullDate = d_date+"-"+d_month+"-"+fullYear;

                    var fifthDay = 5;

                    /*if( fullDate == '3-1-2025' ){

                        fifthDay = 312025;
                    }*/

                    return [(day != 0 && day != 6 && day != 4 && day != fifthDay && hollydayArr.includes(holiday_date_month) != true ),'']
                }
            } 
        );

    });

  // On Delivery Date Select

  jQuery(document).on('change', '#delivery-date', function() {
    jQuery(".sl-options").remove();

    // Dublin South
    const slots = [];
    
    if( jQuery('#dublin-type option:selected').val() == "Dublin South" ){
      
      /*slots["Monday"]     = "18:00 - 22:00";
      slots["Tuesday"]    = "12:00 - 18:00";
      slots["Wednesday"]  = "12:00 - 18:00";
      slots["Thursday"]   = "18:00 - 22:00";
      slots["Friday"]     = "11:00 - 17:00";*/

      slots["Monday"]     = "10:00 - 02:00";
      slots["Tuesday"]    = "10:00 - 18:00";
      slots["Wednesday"]  = "10:00 - 18:00";
      slots["Thursday"]   = "10:00 - 02:00";
      slots["Friday"]     = "10:00 - 18:00";
    }

    // Dublin North
    if( jQuery('#dublin-type option:selected').val() == "Dublin North" ){
      
      /*slots["Monday"]     = "12:00 - 18:00";
      slots["Tuesday"]    = "12:00 - 18:00";
      slots["Wednesday"]  = "18:00 - 22:00";
      slots["Thursday"]   = "12:00 - 18:00";
      slots["Friday"]     = "11:00 - 17:00";*/

      slots["Monday"]     = "10:00 - 02:00";
      slots["Tuesday"]    = "10:00 - 18:00";
      slots["Wednesday"]  = "10:00 - 18:00";
      slots["Thursday"]   = "10:00 - 02:00";
      slots["Friday"]     = "10:00 - 18:00";
    }

    // Dublin North
    if( jQuery('#dublin-type option:selected').val() == "North County Dublin" ){
      
      slots["Monday"]     = "";
      slots["Tuesday"]    = "";
      slots["Wednesday"]  = "";
      slots["Thursday"]   = "";
      slots["Friday"]     = "";
    }

    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var a = new Date(jQuery(this).val());
    var available_option = slots[weekday[a.getDay()]];

    jQuery(".cf-slot").append('<option class="sl-options" value="'+available_option+'">'+available_option+'</option>');

    //

    if( jQuery('#dublin-type option:selected').val() == "North County Dublin" ){
      
      order_notes = "";
      delivery_date = jQuery("#delivery-date").val();
      slot = "";
      dublin_type = jQuery("#dublin-type option:selected").val();

      c_order_notes = jQuery("#hided-order-notes").val();
      
      if( delivery_date!= "" ){
          order_notes = order_notes+" DPD Dispatch Date : "+delivery_date+" | ";
      }
      else{
          order_notes = order_notes+" DPD Dispatch Date : Not Available | ";
      }
      
      if( slot!= "" ){
          order_notes = order_notes+" Time Slot : "+slot+" | ";
      }else{
          order_notes = order_notes+" Time Slot : Not Available | ";
      }

      if( dublin_type!= "" ){
          order_notes = order_notes+" Dublin Type : "+dublin_type;
      }else{
          order_notes = order_notes+" Dublin Type : Not Available";
      }
      
      jQuery("#full-time-slot").val(order_notes);
      jQuery.cookie("full_time_slot", order_notes, { expires: 2, path: '/' });

    }

  });

  // ^ On Delivery Date Select

  jQuery(document).on('change', '.cf-slot', function() {

    order_notes = "";
    dpd_dispatch_date = jQuery("#dpd_dispatch_date").val();
    delivery_date = jQuery("#delivery-date").val();
    slot = jQuery(this).val();
    dublin_type = jQuery("#dublin-type option:selected").val();

    c_order_notes = jQuery("#hided-order-notes").val();
    
    if( delivery_date!= "" ){
        order_notes = order_notes+" Delivery Date : "+delivery_date+" | ";
    }
    else{
        order_notes = order_notes+" Delivery Date : Not Available | ";
    }
    
    if( slot!= "" ){
        order_notes = order_notes+" Time Slot : "+slot+" | ";
    }else{
        order_notes = order_notes+" Time Slot : Not Available | ";
    }

    if( dublin_type!= "" ){
        order_notes = order_notes+" Dublin Type : "+dublin_type;
    }else{
        order_notes = order_notes+" Dublin Type : Not Available";
    }

    jQuery("#full-time-slot").val(order_notes);
    jQuery.cookie("full_time_slot", order_notes, { expires: 2, path: '/' });
  });

  jQuery(document).on('change', '#dpd_dispatch_date', function() {

    order_notes = "";
    dpd_dispatch_date = jQuery("#dpd_dispatch_date").val();
    delivery_date = jQuery("#delivery-date").val();
    slot = jQuery('.cf-slot option:selected').val();
    dublin_type = jQuery("#dublin-type option:selected").val();
    c_order_notes = jQuery("#hided-order-notes").val();

    if( dpd_dispatch_date!= "" ){
        order_notes = "DPD Dispatch Date : "+dpd_dispatch_date;
    }else{
        order_notes = "DPD Dispatch Date : Not Available";
    }

    var selected_country = jQuery('#zs-shipping-address-country option:selected').text();
    //console.log(selected_country);
    if( selected_country == "United Kingdom" ){
      uk_conty = jQuery("#uk-conty").val();

      if( uk_conty != "" ){
        order_notes = order_notes+" | North Ireland Counties : "+uk_conty;
      }

    }

    //order_notes = order_notes+" \n* "+c_order_notes;
    
    /*if( delivery_date!= "" ){
        order_notes = order_notes+" Delivery Date : "+delivery_date+" | ";
    }
    else{
        order_notes = order_notes+" Delivery Date : Not Available | ";

    }
    
    if( slot!= "" ){
        order_notes = order_notes+" Time Slot : "+slot+" | ";
    }else{
        order_notes = order_notes+" Time Slot : Not Available | ";
    }

    if( dublin_type!= "" ){
        order_notes = order_notes+" Dublin Type : "+dublin_type;
    }else{
        order_notes = order_notes+" Dublin Type : Not Available";
    }*/

    jQuery("#full-time-slot").val(order_notes);

    jQuery.cookie("full_time_slot", order_notes, { expires: 2, path: '/' });
  });

  

  // on change of dublin type field
  jQuery(document).on('change', '#dublin-type', function() {

    jQuery(".cf-slot").html('<option value=""> - Select Slot - </option>');

    var current_time = new Date().toLocaleTimeString(); // 11:18:48 AM
    min_date      = 1;
    dub_min_date  = 1;

    jQuery("#delivery-date").val("");
    jQuery(".cf-slot").val("");

    if( jQuery('#dublin-type option:selected').val() != "" ){

      jQuery("#delivery-date").attr("disabled",false).removeClass("fl-disabled");
      jQuery(".cf-slot").attr("disabled",false).removeClass("fl-disabled");

      if( jQuery('#dublin-type option:selected').val() == "North County Dublin" ){
        
        jQuery(".dpd-label").show();
        jQuery(".non-dpd-label").hide();

        jQuery(".cf-slot").html('<option value="Not Available">Not Available</option>');

        jQuery(".cf-slot-con").hide();

        console.log("North County Dublin Selected!");

        jQuery("#delivery-date").datepicker("destroy");
        
        // like DPD Calender
        jQuery( "#delivery-date" ).datepicker(
            { 
                minDate: min_date,
                beforeShowDay:function(date){ 
                    var day         = date.getDay(); 
                    var d_date      = date.getDate(); 
                    var d_month     = date.getMonth()+1;
                    var fullYear    = date.getFullYear();

                    holiday_date_month = d_date+""+d_month;

                    var fullDate = d_date+"-"+d_month+"-"+fullYear;

                    var fifthDay = 5;

                    return [(day != 0 && day != 6 && day != 4 && day != fifthDay && hollydayArr.includes(holiday_date_month) != true ),'']
                }
            } 
        );
        
      }else{

        jQuery(".dpd-label").hide();
        jQuery(".non-dpd-label").show();

        jQuery(".cf-slot-con").show();

        jQuery("#delivery-date").datepicker("destroy");

        // change to Dublin calender
        jQuery( "#delivery-date" ).datepicker({ minDate: dub_min_date,beforeShowDay:function(date){ var day = date.getDay(); var d_date = date.getDate(); var d_month = date.getMonth()+1; holiday_date_month = d_date+""+d_month; return [(day != 0 && day != 6 && day != 1 && day != 4 && hollydayArr.includes(holiday_date_month) != true ),''] }});
      }

    }else{

      jQuery("#delivery-date").attr("disabled",true).addClass("fl-disabled").val("");
      jQuery(".cf-slot").attr("disabled",true).addClass("fl-disabled").val("");
    }


  });

  // for UK logic

  jQuery(document).on('change', '#zs-shipping-address-country', function() {
    
    var selected_country = jQuery('#zs-shipping-address-country option:selected').text();
    console.log("Country Changed!");
    if( selected_country == "United Kingdom" ){
      jQuery(".uk-block").show();
      jQuery(".dl-panel").hide();
      jQuery(".dpd-panel").show();
    }else{
      jQuery(".uk-block").hide();
      jQuery(".dpd-panel").show();
    }
  });

  // on change of state field
jQuery(document).on('change', '#zs-shipping-address-states', function() {

  jQuery("#full-time-slot").val("");

  if( jQuery('#zs-shipping-address-states option:selected').text() == "Dublin" ){

    // for Non DPD
    jQuery("#delivery-date").val("");
    jQuery(".cf-slot").val("");
    jQuery("#dublin-type").val();
    jQuery("#dpd_dispatch_date").val("");

    jQuery(".dl-panel").show();
    jQuery(".dpd-panel").hide();

    jQuery("#delivery-date").attr("disabled",true).addClass("fl-disabled").val("");
    jQuery(".cf-slot").attr("disabled",true).addClass("fl-disabled").val("");
  }else{
    
    // for DPD
    jQuery("#delivery-date").val("");
    jQuery(".cf-slot").val("");
    jQuery("#dublin-type").val();
    jQuery("#dpd_dispatch_date").val("");

    jQuery(".dl-panel").hide();
    jQuery(".dpd-panel").show();
  }
});

  // always make timeslot data updated in zoho commerce default order notes field
  setInterval(() => {
    
    var full_time_slot    = jQuery.cookie("full_time_slot");
    var hided_order_notes = jQuery.cookie("hided_order_notes");

    if( hided_order_notes == undefined ){
      hided_order_notes = "";
    }

    if( full_time_slot == undefined ){
      full_time_slot = "";
    }

    //jQuery("#zs-order-additional-info").text( jQuery("#full-time-slot").val()+" \n* "+jQuery("#hided-order-notes").val() );

    jQuery("#zs-order-additional-info").text( full_time_slot+" \n* "+hided_order_notes );

    //time_slot_data = jQuery("#full-time-slot").val();
    time_slot_data = full_time_slot;
    jQuery("#review-time-slot").remove();
    jQuery("#zs-newly-added-shipping-address").after('<p class="theme-checkout-text-semibold" id="review-time-slot" >'+time_slot_data+'</p>');

  }, 1000);

  setInterval(() => {
    console.log("Coupon Code Label");
    jQuery("#c-label").remove();
    jQuery("#zs-coupon-code").before('<div id="c-label" style="width: 100%;margin-bottom: 5px;">Coupon Code</div>');
  }, 1000);

});

//}

// Gift Card check

jQuery(document).ready(function(){
  
  /*jQuery("a.add-address").click(function(){
    jQuery("#zs-address-form .zpbutton").show();
    jQuery("#zs-address-form .checkout-button").hide();
    console.log("Add New Address");
  });*/

  if( document.body.textContent.includes("Sender's Name") ){

    jQuery(".theme-product-quantity-cart-container .theme-product-variant-label").hide();
    jQuery(".theme-product-quantity-spinner").hide();

    // cart page
    jQuery(".theme-cart-qty").hide();

    jQuery(".theme-checkout-button-area .theme-cart-table-data").html("");

    jQuery(".theme-checkout-button-area .theme-cart-table-data").html('<a href="/checkout#gift-card" class="zpbutton zpbutton-type-primary zpbutton-size-md zpbutton-full-width theme-checkout-button" data-zs-checkout="">Checkout</a>');
jQuery(".theme-checkout-button-area .theme-cart-continue-shopping-button").html("");
    //alert("Gift Card Product")
  }

  if( document.body.textContent.includes("Sign In") ){
    jQuery("#zs-coupon-form").hide();
  }


  console.log(jQuery(".theme-portal-username").text());

  if( document.body.textContent.includes("Sign Out") ){
          
          label_for = jQuery(".select-address:checked").attr("id");
    
          full_address = jQuery('label[for="'+label_for+'"]').next().text();
    
          address_arr = full_address.split(",");
          var dublin_index = (address_arr.length-3);
          //console.log(address_arr);
          if( address_arr[dublin_index].includes("Dublin") ){
            console.log("It's Dublin");
    
            // for Non DPD
            jQuery("#delivery-date").val("");
            jQuery(".cf-slot").val("");
            jQuery("#dublin-type").val();
            jQuery("#dpd_dispatch_date").val("");
    
            jQuery(".dl-panel").show();
            jQuery(".dpd-panel").hide();
    
            jQuery("#delivery-date").attr("disabled",true).addClass("fl-disabled").val("");
            jQuery(".cf-slot").attr("disabled",true).addClass("fl-disabled").val("");
    
          }else{
            console.log("It's not Dublin");
            // for DPD
            jQuery("#delivery-date").val("");
            jQuery(".cf-slot").val("");
            jQuery("#dublin-type").val();
            jQuery("#dpd_dispatch_date").val("");
    
            jQuery(".dl-panel").hide();
            jQuery(".dpd-panel").show();
          }
    
  }


  jQuery(".select-address").change(function(){
    label_for = jQuery(".select-address:checked").attr("id");
    
          full_address = jQuery('label[for="'+label_for+'"]').next().text();
    
          address_arr = full_address.split(",");
          var dublin_index = (address_arr.length-3);
          //console.log(address_arr);
          if( address_arr[dublin_index].includes("Dublin") ){
            console.log("It's Dublin");
    
            // for Non DPD
            jQuery("#delivery-date").val("");
            jQuery(".cf-slot").val("");
            jQuery("#dublin-type").val();
            jQuery("#dpd_dispatch_date").val("");
    
            jQuery(".dl-panel").show();
            jQuery(".dpd-panel").hide();
    
            jQuery("#delivery-date").attr("disabled",true).addClass("fl-disabled").val("");
            jQuery(".cf-slot").attr("disabled",true).addClass("fl-disabled").val("");
    
          }else{
            console.log("It's not Dublin");
            // for DPD
            jQuery("#delivery-date").val("");
            jQuery(".cf-slot").val("");
            jQuery("#dublin-type").val();
            jQuery("#dpd_dispatch_date").val("");
    
            jQuery(".dl-panel").hide();
            jQuery(".dpd-panel").show();
          }
  });

});
</script>


<script src="https://cdn-eu.pagesense.io/js/melanieobrien/69fa48d189174dcf83a57611871ae214.js"></script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-870013040"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-870013040');
</script>

<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '689410405142373');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=689410405142373&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->

<!--ZC Popup Code Starts-->
<script type="text/javascript" id="ZC_Forms_Popup" src="https://campaigns.zoho.eu/js/optin.min.js" ></script> <script type="text/javascript">window.onload=function(){loadZCPopup('3zfbf59090650b0413e4eca1738679e3b9f00378a6f5a586d47d4819466cee5164','ZCFORMVIEW','3z82cae8e9fd3550143e5ce533b4f347d0')}</script>
<!--ZC Popup Code Ends-->
<style>
input::placeholder{
    color: #aaa9aa !important;
    opacity: 1 !important;
}
</style>

<script>
document.addEventListeners('DOMContentLoaded', function() {
if (zs_view === 'checkout') {
document.getElementById('c-order-notes').previousSibling.innerHTML = "Gift Message/ Delivery Note";
}
})
</script>
