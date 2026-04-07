<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
            margin: 0;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            padding: 30px;
          }
          h1 {
            color: #333;
            margin-top: 0;
            border-bottom: 3px solid #0066cc;
            padding-bottom: 10px;
          }
          .url-section {
            margin-bottom: 20px;
          }
          .url-item {
            padding: 12px;
            margin: 8px 0;
            background-color: #f9f9f9;
            border-left: 4px solid #0066cc;
            border-radius: 4px;
            transition: background-color 0.3s;
          }
          .url-item:hover {
            background-color: #f0f0f0;
          }
          .url-item a {
            color: #0066cc;
            text-decoration: none;
            word-break: break-all;
          }
          .url-item a:hover {
            text-decoration: underline;
          }
          .url-count {
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #eee;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Sitemap</h1>
          <div class="url-section">
            <xsl:apply-templates select="//sitemap:url"/>
          </div>
          <div class="url-count">
            <strong>Total URLs:</strong> <xsl:value-of select="count(//sitemap:url)"/>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="sitemap:url">
    <div class="url-item">
      <a href="{sitemap:loc}" target="_blank">
        <xsl:value-of select="sitemap:loc"/>
      </a>
    </div>
  </xsl:template>
</xsl:stylesheet>
