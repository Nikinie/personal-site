const fs = require("fs");
const path = require("path");

function generateQwikComponent(name, svgContent) {
  const componentName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  // Use a counter to create unique fill prop names for each fill in the SVG
  let fillCounter = 0;
  const svgWithProps = svgContent.replace(
    /fill="([^"]*)"/g,
    (match, originalFill) => {
      fillCounter++;
      return `fill={fill ?? "${originalFill}"}`;
    },
  );

  // Construct the component content with interface for props
  const componentContent = `import { component$ } from '@builder.io/qwik';

interface ${componentName}IconProps {
  class?: string;
  fill?: string;
}

export const ${componentName}Icon = component$<${componentName}IconProps>(({ class: className, fill }) => (
  ${svgWithProps.replace(/<svg/, `<svg class={\`\${className ?? ""}\`}`)}
));
`;

  return componentContent;
}

// Function to save the generated component to a file
function saveComponentToFile(name, componentContent) {
  const fileName = `${name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")}.tsx`;
  const filePath = path.join(__dirname, fileName);

  fs.writeFileSync(filePath, componentContent, "utf8");
  console.log(`Component saved as ${filePath}`);
}

// Example usage
const iconName = process.argv[2];
const svgContent = fs.readFileSync(process.argv[3], "utf8");

if (!iconName || !svgContent) {
  console.error("Usage: node generateQwikIcon.js <iconName> <svgFilePath>");
  process.exit(1);
}

const componentContent = generateQwikComponent(iconName, svgContent);
saveComponentToFile(iconName, componentContent);
