const fs = require('fs');
const path = require('path');

// Fix About.jsx - replace hardcoded paragraphs with t() calls (match any apostrophe ')
const aboutPath = path.join(__dirname, 'src', 'pages', 'About.jsx');
let about = fs.readFileSync(aboutPath, 'utf8');
const aboutRegex = /<p className="mb-4">\s*At Explore America Travel, we[\u2019']ve been helping travelers create\s*<\/p>\s*<p className="mb-4 d-none">[\s\S]*?we[\u2019']ve got you covered\.\s*<\/p>/;
const aboutNew = `<p className="mb-4">{t('about.paragraph1')}</p>
          <p className="mb-4">{t('about.paragraph2')}</p>`;
if (aboutRegex.test(about)) {
  about = about.replace(aboutRegex, aboutNew);
  fs.writeFileSync(aboutPath, about);
  console.log('About.jsx updated');
} else {
  console.log('About.jsx: pattern not found (maybe already fixed)');
}

// Fix Packages.jsx - Norway description (curly apostrophe in "the'")
const packagesPath = path.join(__dirname, 'src', 'pages', 'Packages.jsx');
let pkg = fs.readFileSync(packagesPath, 'utf8');
const pkgOld = `Discover fjords, northern lights, and stunning landscapes. Hike, cruise, and experience the\u2019 magic of Scandinavia.`;
const norwayP = /<p>\s*Discover fjords[\s\S]*?Scandinavia\.\s*<\/p>/;
if (norwayP.test(pkg)) {
  pkg = pkg.replace(norwayP, '<p>{t(\'packages.norwayDesc\')}</p>');
  fs.writeFileSync(packagesPath, pkg);
  console.log('Packages.jsx updated');
} else {
  console.log('Packages.jsx: Norway paragraph pattern not found');
}
