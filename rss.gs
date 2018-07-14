function doGet() {

  // What is the original language of the RSS Feed
  var fromLang = "id";    
  
  // What is the destination language
  var toLang   = "en";    
  
  // Enter the full URL of the RSS feed
  var rssFeed  = "https://feeds.feedburner.com/Artikelcara10TipsTrik/";  
  

  /*


  T U T O R I A L
  - - - - - - - - 
  
  Step 0. Go to File -> Make a Copy to copy this script to your Google Drive.
  Step 1. Update the values of fromLang, toLang and rssFeed fields above.
  Step 2. Go to File -> Manage Versions and Save a new version.
  Step 3. Go to Publish -> Deploy as Web App, choose "Anyone, even Anonymous" under "Who can access the app" and click Deploy.
  
  Google Script will provide a URL of the web app. That's the translated RSS feed which you can subscribe to in Google Reader.
  
  For details: http://www.labnol.org/?p=27451
  
  For help, send me a tweet @labnol or an email at amit@labnol.org


  T H E   G E E K Y   S T U F F
  - - -   - - - - -   - - - - -
  
  You can ignore everything that's below this line.  


  */
  
  
  var feed = parseRSS(rssFeed, fromLang, toLang);    
  
  return ContentService.createTextOutput(feed).setMimeType(ContentService.MimeType.RSS);    
}


function parseRSS(feed, fromLang, toLang) {
   
  var id = Utilities.base64Encode(feed + fromLang + toLang);
  
  var cache = CacheService.getPublicCache();
  var rss   = cache.get(id);
  
  if (rss != null) {
    return rss;
  }
  
  var item, date, title, link, desc, guid; 
  
  var txt = UrlFetchApp.fetch(feed).getContentText();
  var doc = Xml.parse(txt, false);  
  
  title = doc.getElement().getElement("channel").getElement("title").getText();
  
  rss = '<rss version="2.0">';
  rss += "<channel><title>";
  rss += LanguageApp.translate(title, fromLang, toLang);
  rss += " (" + title + ")</title>";
    
  var items = doc.getElement().getElement("channel").getElements("item");   
  
  for (var i in items) {

    try {
      
      item  = items[i];
      
      title = item.getElement("title").getText();
      link  = item.getElement("link").getText();
      date  = item.getElement("pubDate").getText();
      desc  = item.getElement("description").getText();
      
      guid  = Utilities.base64Encode(link + fromLang + toLang);
          
      title = LanguageApp.translate(title, fromLang, toLang);
      desc  = LanguageApp.translate(desc,  fromLang, toLang, {contentType: "html"});
      
      rss += "<item>";
      rss += "  <title>"   + title + "</title>";
      rss += "  <link>"    + link  + "</link>";
      rss += "  <pubDate>" + date  + "</pubDate>";
      rss += "  <guid>"    + guid  + "</guid>";
      rss += "  <description><![CDATA[" + desc + "]]></description>";
      rss += "</item>";
      
    } catch (e) {
      Logger.log(e);
    }
  }
  
  rss += "</channel></rss>";
  
  cache.put(id, rss, 3600); // Cache the feed for an hour
  return rss;
  
}
