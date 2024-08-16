const { SingleSelect, HTML } = RoundtableJS;
import { options } from '../utils.js';

     const title = new HTML({
      id: 'welcome_message',
      content: '<h2>Source code access management</h2>',
      styles: {
          root: {
              textAlign: 'center',
              marginBottom: '30px'
          }
      }
   });

   const question = new SingleSelect({
      id: 'step2Question1',
      text: 'Project follows a documented SDLC process. Documentation shoud include all phases and goals & requirements for each step ?',
      subText: '(A SDLC process consists of several phases, from planning & gathering requirements to coding, testing, deployment and manteinance but might contain more or some of those can be done together as one single phase for example)',
      
      options: options,
   });
  
     
 

    export { title, question};
  