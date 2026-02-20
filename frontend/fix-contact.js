const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src', 'pages', 'Contact.jsx');
let c = fs.readFileSync(file, 'utf8');
// Match We're or We're (curly apostrophe)
c = c.replace(/<h1 className="mb-5">We[\u2019']re Here to Help<\/h1>/, '<h1 className="mb-5">{t(\'contact.weAreHere\')}</h1>');
c = c.replace(/<p className="mb-5">\s*Whether you[\u2019']re planning[\s\S]*?Reach out to us anytime!\s*<\/p>/, '<p className="mb-5">{t(\'contact.intro\')}</p>');
fs.writeFileSync(file, c);
console.log('Contact.jsx updated');
