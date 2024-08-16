const { SingleSelect, HTML } = RoundtableJS;
import { options } from '../utils.js';

     const title = new HTML({
      id: 'welcome_message',
      content: '<h2>Code Review</h2>',
      styles: {
          root: {
              textAlign: 'center',
              marginBottom: '30px'
          }
      }
   });

   const question1 = new SingleSelect({
      id: 'codeReviewQuestion1',
      text: 'Code review process is defined, documented and it is strictly followed ?',
      options: options,
   });

   const question2 = new SingleSelect({
    id: 'codeReviewQuestion2',
    text: 'All code is reviewed by at least 1 peer (or more) before being put to production or merged into main branch?',
    options: options,
 });

 const question3 = new SingleSelect({
    id: 'codeReviewQuestion3',
    text: 'Code review process is enforced by tool configuration ',
    subText: '(i.e. main branch is read only and code can only be merged after a successfully Pull Request (PR), ...)',
    options: options,
 });
  
 const question4 = new SingleSelect({
    id: 'codeReviewQuestion4',
    text: 'Current process & tooling configuration would allow, potentially, for third-party contributions without disrupting it ?',
    subText: 'For example, if project is made available across the organization (inner sourced)',
    options: options,
 });
     
 

    export { title, question1, question2, question3, question4};
  