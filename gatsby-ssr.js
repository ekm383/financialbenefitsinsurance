const React = require("react")

const widgetcode =
  "cf0104f2ad79a1c9bd1317944221a1cca69fe57dd2d734f95e07923c16158c2e4fc7c4b2301c4343917922dfdbff702120d4f486795c2f2595dbaeaf7d5679df" //Insert your salesiq widget code here.
const src = "https://salesiq.zoho.com/widget"
exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `var $zoho = $zoho || {};
                var obj = {widgetcode:"${widgetcode}", values:{},ready:function(){}};
                $zoho.salesiq = $zoho.salesiq || obj
                var d = document;
                s = d.createElement("script");
                s.type = "text/javascript";
                s.id = "zsiqscript";
                s.defer = true;
                s.src = "${src}";
                t = d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s, t);
                d.write("<div id='zsiqwidget'></div>");`,
      }}
    />, //Injecting SalesIq Script on body of the page
  ])
}
