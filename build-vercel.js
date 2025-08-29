const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build the project
console.log('Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Move files from dist/public to root
const distPublic = path.join(__dirname, 'dist', 'public');
const rootDir = __dirname;

if (fs.existsSync(distPublic)) {
  const files = fs.readdirSync(distPublic);
  
  files.forEach(file => {
    const srcPath = path.join(distPublic, file);
    const destPath = path.join(rootDir, file);
    
    // Remove destination if exists
    if (fs.existsSync(destPath)) {
      fs.rmSync(destPath, { recursive: true, force: true });
    }
    
    // Copy from dist/public to root
    if (fs.statSync(srcPath).isDirectory()) {
      fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
  
  console.log('Build files moved to root directory');
} else {
  console.log('No dist/public directory found');
}