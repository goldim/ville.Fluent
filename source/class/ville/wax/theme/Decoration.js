/* ************************************************************************

   Copyright: 2021 sqville

   License: MIT license

   Authors: Chris Eskew (sqville) chris.eskew@sqville.com

************************************************************************ */
/**
 * @asset(ville/wax/wax-switch-knob.svg)
 * @asset(ville/wax/wax-switch-knob26.svg)
 * 
 */



qx.Theme.define("ville.wax.theme.Decoration",
{
  extend : ville.theme.fluent.Decoration,

  decorations :
  {

    "heading2" :
    {
      style :
      {
        width: [1,0,0,0],
        color: "NeutralBackground5"
      }
    },
    
    "scaledback-box" :
    {
      style :
      {
        radius: 3
      }
    },

    "normal-box" :
    {
      style :
      {
        radius: 0
      }
    },
    
    "nobgimg" :
    {
      style :
      {
        backgroundImage: "",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },
    
    "tablelist-list" :
    {
      style :
      {
        width : 1,
        color : "gray"
      }
    },
    
    "groupbox-open" :
    {
      style :
      {
        backgroundImage: "wax/baseline-expand_less-24px.svg",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },

    "groupbox-closed" :
    {
      style :
      {
        backgroundImage: "wax/demo/baseline-expand_more-24px.svg",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },

    "page-button-right" :
    {
      style :
      {
        width: [0,0,1,0],
        color: "#C7C7C7",
        backgroundImage: "ville/wax/chevron_right-24px.svg",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },

    "page-button-right-last" :
    {
      include: "page-button-right",
      
      style :
      {
        width: 0
      }
    },

    "white-box" :
    {
      style :
      {
        width: 1,
        color: "white-box-border",
        radius: 3
      }
    },

    "connected-top-box" :
    {
    	include : "white-box",
    	
    	style :
	    {
	      width: [1,0,0,0],
	      radius: [ 0, 0, 0, 0 ]
	    }
    },
    
    "border-me" :
    {
      style :
      {
        width : 1,
        color : "black",
        style : "solid"
      }
    },

    "topheader-wax" :
    {
      style :
      {
        width : [0,0,1,0],
        color : "NeutralBackground1",
        style : "solid"
      }
    },

    "topheader-wax-scrolldown" :
    {
      include: "topheader-wax",

      style :
      {
        color : "NeutralStroke1"
      }
    },

    "topheader" :
    {
      style :
      {
        width : [0,0,1,0],
        color : "white-box-border",
        style : "solid"
      }
    },

    "topheader-blended" :
    {
      style :
      {
        width : [0,0,1,0],
        color : "#F2F1F6",
        style : "solid"
      }
    },

    "leftside" :
    {
      style :
      {
        width : [0,1,0,0],
        color : "white-box-border",
        style : "solid"
      }
    },

    "bottombar" :
    {
      style :
      {
        width : [1,0,0,0],
        color : "white-box-border",
        style : "solid"
      }
    },

    "bottombar-blended" :
    {
      style :
      {
        width : [1,0,0,0],
        color : "#F2F1F6",
        style : "solid"
      }
    },

    "mmenubutton-hym" :
    {
      include : "image",
      style :
      {
        backgroundImage: ""
      }
    },

    /*
    ---------------------------------------------------------------------------
      Main Menu Popup (Drawer)
    ---------------------------------------------------------------------------
    */
    
   "mainmenupopup" :
   {
    include : "popup", 
    
    style :
     {
       transitionProperty: ["visibility"],
       transitionDuration: "3s"
     }
   },

    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */
    
   "mainmenubutton-box" :
   {
     style :
     {
       radius : 0,
       width : [0,0,0,5],
       color : "white",
       transitionProperty: ["border-left-color"],
       transitionDuration: ".35s"
     }
   },

   "mainmenubutton-box-hovered" :
   {
     include : "mainmenubutton-box",

     style :
     {
      color : "#cccccc"
     }
   },

   "mainmenubutton-box-pressed" :
   {
     include : "mainmenubutton-box",

     style :
     {
      color : "blue"
     }
   },

   "mainmenubutton-box-mark" : 
   {
     style :
     {
      radius : 0,
      width : [0,0,0,5], 
      color : "blue"
     }
   },

   "mainmenubutton-box-new" : 
   {
     style :
     {
      radius : 0,
      width : [0,0,0,5], 
      color : "transparent"
     }
   },

   "mainmenuindicator" :
   {
    style :
     {
      radius: 3
     }
   },

   "window-captionbar-default" :
   {
     style :
     {
      width: 0
     }
   },

   "hym-box-noborder" :
   {
     style :
     {
      radius: 8
     }
   },

   "wax-form-button" :
   {
    style :
    {
     radius: 6
    }
   },

   "article": 
   {
    include : "hym-box-noborder",
    
    style: 
    {
      backgroundImage: "ville/wax/Yellow_Car_g7.jpg",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "center",
      backgroundPositionY: -30
    }
  },

    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */

   "progressbar" :
   {
     style:
     {
       backgroundColor: "#FFF",
       radius : 0,
       width: 0,
       color: "border-separator"
     }
   },
   
   "progressbar-trans" :
   {
       radius : 0,
       width: 0
   },


   /*
    ---------------------------------------------------------------------------
      UPLOAD
    ---------------------------------------------------------------------------
    */
   "upload-area" :
   {
     style :
     {
       width : 1,
       radius : 3,
       style : "dashed",
       color : "gray"
     }
   },
   
   "upload-area-dragover" :
   {
    include: "upload-area",
     
     style :
     {
       style : "solid",
       color : "orange"
     }
   },

   /*
    ---------------------------------------------------------------------------
      VILLE ICONS USING CLIP-PATH
    ---------------------------------------------------------------------------
    */

   "ville-icon-dismiss" :
   {    
    style :
     {
       clipPath : ville.theme.fluent.Image.SVG["dismiss-path"]
     }
   },

   "ville-icon-chevron-down" :
   {    
    style :
     {
       clipPath : ville.theme.fluent.Image.SVG["chevronDownRegular-path"]
     }
   },

   /*
    ---------------------------------------------------------------------------
      WAX TABVIEW
    ---------------------------------------------------------------------------
    */

    "wax-tabview-mark" : 
    {
      style :
      {
        radius : 30
      }
    },

    "wax-tabview-line" : 
    {
      style :
      {
        radius : 2
      }
    },

    "wax-tabview-block" : 
    {
      style :
      {
        radius : 4,
        shadowLength : 1,
        shadowBlurRadius : 3,
        shadowColor : "shadow"
      }
    },

    "wax-tabview-bar-block" : 
    {
      style :
      {
        radius : 4
      }
    },

    /*
    ---------------------------------------------------------------------------
      FLUENT TABVIEW - override for enhanced features
    ---------------------------------------------------------------------------
    */

    //overridden
    "tabview-page/button" :
    {
      style : function(states)
      {
        var decorator;
        var padding;

        // default padding
        if (states.barTop || states.barBottom) {
          padding = [12, 18, 12, 15];
        } else {
          padding = [12, 8, 12, 8];
        }

        // decorator
        if (states.checked) {
          if (states.barTop) {
            decorator = "tabview-page-button-top";
          } else if (states.barBottom) {
            decorator = "tabview-page-button-bottom";
          } else if (states.barRight) {
            decorator = "tabview-page-button-right";
          } else if (states.barLeft) {
            decorator = "tabview-page-button-left";
          }
        } else {
          for (var i=0; i < padding.length; i++) {
            padding[i] += 1;
          }
          // reduce the size by 1 because we have different decorator border width
          if (states.barTop) {
            padding[2] -= 1;
            //margin[0] -= 1;
          } else if (states.barBottom) {
            padding[0] -= 1;
            //margin[2] += 1;
          } else if (states.barRight) {
            padding[3] -= 1;
            //margin[1] += 1;
          } else if (states.barLeft) {
            padding[1] -= 1;
            //margin[3] += 1;
          }
        }

        return {
          zIndex : states.checked ? 10 : 5,
          //decorator : decorator,
          textColor : states.disabled ? "text-disabled" : "NeutralForeground1",
          font : states.checked ? "button" : "default",
          padding : [10, 16, 4, 16],
          cursor: "pointer"
          //marginBottom : states.barBottom ? 1 : undefined,
          //marginLeft : states.barLeft ? 1 : undefined
        };
      }
    },

   /*
    ---------------------------------------------------------------------------
      WAX SWITCH
    ---------------------------------------------------------------------------
    */

    "wax-switch" :
    {
      style :
      {
        radius: 70,
        width : [1,2],
        color: "#e3e2e2",
        backgroundImage: "ville/wax/wax-switch-knob.svg",
        backgroundPositionX: "left",
        backgroundPositionY: "center"
      }
    },

    "wax-switch-checked" :
    {
      style :
      {
        radius: 70,
        width : [1,2],
        color: "blue",
        backgroundImage: "ville/wax/wax-switch-knob.svg",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },

    "wax-switch-lgr" :
    {
      style :
      {
        radius: 70,
        width : [1,1],
        color: "NeutralStroke1",
        backgroundImage: "ville/wax/Brightness.svg",
        backgroundPositionX: "left",
        backgroundPositionY: "center",
        transitionProperty: "all",
        transitionDuration: ville.global.duration.Slow,
        transitionTimingFunction : ville.global.curve.EasyEase
      }
    },

    "wax-switch-lgr-checked" :
    {
      style :
      {
        radius: 70,
        width : [1,1],
        color: "BrandBackground1",
        backgroundImage: "ville/wax/ClearNight.svg",
        backgroundPositionX: "right",
        backgroundPositionY: "center",
        transitionProperty: "all",
        transitionDuration: ville.global.duration.Slow,
        transitionTimingFunction : ville.global.curve.EasyEase
      }
    }
    
  }
});