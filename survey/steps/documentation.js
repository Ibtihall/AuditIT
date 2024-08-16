
const { SingleSelect, HTML } = RoundtableJS;
import { options } from '../utils.js';

     const title = new HTML({
      id: 'welcome_message',
      content: '<h2>Documentation</h2>',
      styles: {
          root: {
              textAlign: 'center',
              marginBottom: '30px'
          }
      }
   });

   const question1 = new SingleSelect({
      id: 'documentationQuestion1',
      text: 'Source code follows a minimum team agreed level of comments ?',
      options: options,
   });

    const question2 = new SingleSelect({
        id: 'documentationQuestion2',
        text: 'Code repository contains a README.md file with basic information about the project, requirements and how to run it. If repository is a monorepo or contains multiple modules, each one must have their own README.md file in addition to the general on the root folder ?',
        options: options,
    });

    const question3 = new SingleSelect({
        id: 'documentationQuestion3',
        text: 'Project has a High Level Design Architecture document & it is up-to-date ?',
        subText: '(can be versioned together with the project or in a separate documentation tool)',
        options: options,
    });
  
    const question4 = new SingleSelect({
        id: 'documentationQuestion4',
        text: 'In the case of an inner source project contains a contributing guide and Pull Request & new issue/feature templates ?',
        options: options,
    });
    const question5 = new SingleSelect({
        id: 'documentationQuestion4',
        text: 'In the case of an open source project contains a code of conduct and a valid AXA Open Source license in addition of inner source requirements ?',
        subText: '(previous point)',
        options: options,
    });
    const question6 = new SingleSelect({
        id: 'documentationQuestion4',
        text: 'Documentation is constantly reviewed as part of code reviews or additional processes ?',
        options: options,
    });
    const question7 = new SingleSelect({
        id: 'documentationQuestion4',
        text: 'If project contains any API or endpoint, it is properly documented (OpenAPI/Swagger for example) ?',
        subText: 'For example, if project is made available across the organization (inner sourced)',
        options: options,
    });
     
 

    export { title, question1, question2, question3, question4, question5, question6, question7};
  