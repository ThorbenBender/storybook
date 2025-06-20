#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

function extractWikiContent(mdxContent) {
  // Remove Storybook-specific imports and components
  let wikiContent = mdxContent
    .replace(/import.*from.*['"]@storybook\/blocks['"];?\n/g, '')
    .replace(/import.*from.*['"]\.\/.*['"];?\n/g, '')
    .replace(/<Meta[\s\S]*?\/>/g, '')
    .replace(/<Canvas>[\s\S]*?<\/Canvas>/g, '')
    .replace(/<Story[\s\S]*?<\/Story>/g, '')
    .replace(/<ArgsTable[\s\S]*?\/>/g, '')
    .replace(/## Stories[\s\S]*?## Component API/g, '## Component API')
    .replace(/## Component API[\s\S]*$/g, '')
    .trim();

  return wikiContent;
}

async function exportToWiki() {
  const mdxFiles = await glob('src/**/*.mdx');
  const wikiDir = path.join(__dirname, '..', 'wiki-export');
  
  if (!fs.existsSync(wikiDir)) {
    fs.mkdirSync(wikiDir, { recursive: true });
  }

  mdxFiles.forEach(mdxFile => {
    const content = fs.readFileSync(mdxFile, 'utf8');
    const wikiContent = extractWikiContent(content);
    
    const fileName = path.basename(mdxFile, '.mdx') + '.md';
    const outputPath = path.join(wikiDir, fileName);
    
    fs.writeFileSync(outputPath, wikiContent);
    console.log(`Exported: ${mdxFile} -> ${outputPath}`);
  });

  console.log(`\nWiki files exported to: ${wikiDir}`);
  console.log('You can now copy these files to your GitHub wiki repository.');
}

if (require.main === module) {
  exportToWiki().catch(console.error);
}

module.exports = { exportToWiki, extractWikiContent };