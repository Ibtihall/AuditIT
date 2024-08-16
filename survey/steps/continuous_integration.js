const { SingleSelect, HTML } = RoundtableJS;
import { options } from '../utils.js';

     const title = new HTML({
      id: 'welcome_message',
      content: '<h2>Continuous Integration (CI)</h2>',
      styles: {
          root: {
              textAlign: 'center',
              marginBottom: '30px'
          }
      }
   });

   const question1 = new SingleSelect({
      id: 'CIQuestion1',
      text: 'Code repository is integrated with a CI tool & builds are triggered automatically ?',
      options: options,
   });

    const question2 = new SingleSelect({
        id: 'CIQuestion2',
        text: 'CI tool automatically performs linting, automated testing and other validations per every commit or Pull Request ?',
        options: options,
    });

    const question3 = new SingleSelect({
        id: 'CIQuestion3',
        text: 'CI tool performs builds & larger tests frequently but not necessarily per commit (performance testing, UI testing, end to end ...).',
        options: options,
    });
  
    const question4 = new SingleSelect({
        id: 'CIQuestion4',
        text: 'CI tooling is connected with a team IM platform or monitoring tool to notify about status, build failures... in realtime (in addition of email notifications) ?',
        options: options,
    });
    const question5 = new SingleSelect({
        id: 'CIQuestion4',
        text: 'Code maintainability and technical debt (including vulnerabilities, test coverage, ...) is measured during CI process (eg. SonarQube) ?',
        options: options,
    });
    const question6 = new SingleSelect({
        id: 'CIQuestion4',
        text: 'Technical debt (test coverage, unmaintained dependencies, ...) lower threshold is defined and agreed between the team ?',
        options: options,
    });
    const question7 = new SingleSelect({
        id: 'CIQuestion4',
        text: 'CI acts as blocker if Technical debt (test coverage, unmaintained dependencies, ...) goes below the defined threshold. ?',
        options: options,
    });
     
 

    export { title, question1, question2, question3, question4, question5, question6, question7};
  