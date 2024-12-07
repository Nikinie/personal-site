import { component$ } from "@builder.io/qwik";
import { JavaScriptIcon } from "./icons/JavaScript.tsx";
import { RubyIcon } from "./icons/Ruby.tsx";
import { TypeScriptIcon } from "./icons/TypeScript.tsx";
import { PostgresIcon } from "./icons/Postgres.tsx";
import { GraphQLIcon } from "./icons/GraphQL.tsx";
import { EmberIcon } from "./icons/Ember.tsx";
import { ReactIcon } from "./icons/React.tsx";
import { TailwindIcon } from "./icons/Tailwind.tsx";
import { TerraformIcon } from "./icons/Terraform.tsx";
import { AwsIcon } from "./icons/Aws.tsx";
import { AzureIcon } from "./icons/Azure.tsx";
import { NodeIcon } from "./icons/Node.tsx";
import { AstroIcon } from "./icons/Astro.tsx";
import { HasuraIcon } from "./icons/Hasura.tsx";

const svgList = [
  JavaScriptIcon,
  TypeScriptIcon,
  RubyIcon,
  PostgresIcon,
  GraphQLIcon,
  HasuraIcon,
  TailwindIcon,
  EmberIcon,
  ReactIcon,
  AstroIcon,
  NodeIcon,
  TerraformIcon,
  AwsIcon,
  AzureIcon,
];

const timesToRepeat = 10;
const svgComponents = svgList; //Array(timesToRepeat).flatMap(() => svgList);

console.log(svgComponents);

export default component$(() => {
  return (
    <div class="flex w-full flex-wrap overflow-hidden">
      {svgComponents.map((IconComponent, index) => (
        <IconComponent class="h-16 w-16 px-1" />
      ))}
    </div>
  );
});
