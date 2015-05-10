$(document).ready(function(){
  var status ="none";
  $("#busy2").click(function(){
    status = "busy2";
    username = $("#username_hidden").val();
    $.ajax({
      url: "php/input_status.php",
      type: 'POST',
      data: "username="+username+"&status="+status,
      success: function(result) {
        // use the result as you wish in your html here

      }});

      $( ".all_menu" ).each(function() {
        //alert('toto');
        //$(this).removeClass( "active" );
        $(this).parent().attr("class","");
      });

      $(this).parent().attr("class", "active");

    });
    $("#medium").click(function(){
      status = "medium";
      username = $("#username_hidden").val();
      $.ajax({
        url: "php/input_status.php",
        type: 'POST',
        data: "username="+username+"&status="+status,
        success: function(result) {
          // use the result as you wish in your html here

        }});

        $( ".all_menu" ).each(function() {
          //alert('toto');
          //$(this).removeClass( "active" );
          $(this).parent().attr("class","");
        });

        $(this).parent().attr("class", "active");

      });
      $("#clear").click(function(){
        status = "clear";
        username = $("#username_hidden").val();
        $.ajax({
          url: "php/input_status.php",
          type: 'POST',
          data: "username="+username+"&status="+status,
          success: function(result) {
            // use the result as you wish in your html here

          }});

          $( ".all_menu" ).each(function() {
            //alert('toto');
            //$(this).removeClass( "active" );
            $(this).parent().attr("class","");
          });

          $(this).parent().attr("class", "active");

        });
        $("#none").click(function(){
          status = "none";
          username = $("#username_hidden").val();
          $.ajax({
            url: "php/input_status.php",
            type: 'POST',
            data: "username="+username+"&status="+status,
            success: function(result) {
              // use the result as you wish in your html here

            }});

            $( ".all_menu" ).each(function() {
              //alert('toto');
              //$(this).removeClass( "active" );
              $(this).parent().attr("class","");
            });

            $(this).parent().attr("class", "active");

          });

          var $template = $('#template');
          var $position = $('#position');

          // chargement des régions
          $.ajax({
              url: 'php/get_position.php',
              data: 'template', // on envoie $_GET['template']
              dataType: 'json', // on veut un retour JSON
              success: function(json) {
                  $.each(json, function(index, value) { // pour chaque noeud JSON
                      // on ajoute l option dans la liste
                      $template.append('<option value="'+ index +'">'+ value +'</option>');
                  });
              }
          });

          // à la sélection d une région dans la liste
          $template.on('change', function() {
              var val = $(this).val(); // on récupère la valeur du template

              if(val != '') {
                  $position.empty(); // on vide la liste

                  $.ajax({
                      url: 'php/get_position.php',
                      data: 'template_name='+ val,
                      dataType: 'json',
                      success: function(json) {
                          $.each(json, function(index, value) {
                              $position.append('<option value="'+ index +'">'+ value +'</option>');
                          });
                      }
                  });
              }
          });

        });

        $(window).on('load', function(){
        $('body').css('cursor', 'default');
    });

        function createTarget (t)
        {
          propriete = "top=0,left=0,resizable=no, status=no, directories=no, addressbar=no, toolbar=no, scrollbars=no, menubar=no, location=no, statusbar=no"
          propriete += ",width=80,height=240";

        window.open('',t,propriete);
        return true;
        }
        var Konami = function (callback) {
        	var konami = {
        		addEvent: function (obj, type, fn, ref_obj) {
        			if (obj.addEventListener)
        				obj.addEventListener(type, fn, false);
        			else if (obj.attachEvent) {
        				// IE
        				obj["e" + type + fn] = fn;
        				obj[type + fn] = function () {
        					obj["e" + type + fn](window.event, ref_obj);
        				}
        				obj.attachEvent("on" + type, obj[type + fn]);
        			}
        		},
        		input: "",
        		pattern: "38384040373937396665",
        		load: function (link) {
        			this.addEvent(document, "keydown", function (e, ref_obj) {
        				if (ref_obj) konami = ref_obj; // IE
        				konami.input += e ? e.keyCode : event.keyCode;
        				if (konami.input.length > konami.pattern.length)
        					konami.input = konami.input.substr((konami.input.length - konami.pattern.length));
        				if (konami.input == konami.pattern) {
        					konami.code(link);
        					konami.input = "";
        					e.preventDefault();
        					return false;
        				}
        			}, this);
        			this.iphone.load(link);
        		},
        		code: function (link) {
        			window.location = link
        		},
        		iphone: {
        			start_x: 0,
        			start_y: 0,
        			stop_x: 0,
        			stop_y: 0,
        			tap: false,
        			capture: false,
        			orig_keys: "",
        			keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
        			code: function (link) {
        				konami.code(link);
        			},
        			load: function (link) {
        				this.orig_keys = this.keys;
        				konami.addEvent(document, "touchmove", function (e) {
        					if (e.touches.length == 1 && konami.iphone.capture == true) {
        						var touch = e.touches[0];
        						konami.iphone.stop_x = touch.pageX;
        						konami.iphone.stop_y = touch.pageY;
        						konami.iphone.tap = false;
        						konami.iphone.capture = false;
        						konami.iphone.check_direction();
        					}
        				});
        				konami.addEvent(document, "touchend", function (evt) {
        					if (konami.iphone.tap == true) konami.iphone.check_direction(link);
        				}, false);
        				konami.addEvent(document, "touchstart", function (evt) {
        					konami.iphone.start_x = evt.changedTouches[0].pageX;
        					konami.iphone.start_y = evt.changedTouches[0].pageY;
        					konami.iphone.tap = true;
        					konami.iphone.capture = true;
        				});
        			},
        			check_direction: function (link) {
        				x_magnitude = Math.abs(this.start_x - this.stop_x);
        				y_magnitude = Math.abs(this.start_y - this.stop_y);
        				x = ((this.start_x - this.stop_x) < 0) ? "RIGHT" : "LEFT";
        				y = ((this.start_y - this.stop_y) < 0) ? "DOWN" : "UP";
        				result = (x_magnitude > y_magnitude) ? x : y;
        				result = (this.tap == true) ? "TAP" : result;

        				if (result == this.keys[0]) this.keys = this.keys.slice(1, this.keys.length);
        				if (this.keys.length == 0) {
        					this.keys = this.orig_keys;
        					this.code(link);
        				}
        			}
        		}
        	}

        	typeof callback === "string" && konami.load(callback);
        	if (typeof callback === "function") {
        		konami.code = callback;
        		konami.load();
        	}

        	return konami;
        };
