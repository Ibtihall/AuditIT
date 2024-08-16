const { SingleSelect, HTML } = RoundtableJS;
import { options } from '../utils.js';

 
    const title = new HTML({
       id: 'welcome_message',
       content: '<h2>Foundations</h2>',
       styles: {
           root: {
               textAlign: 'center',
               marginBottom: '30px'
           }
       }
    });
 
  
     const question1 = new SingleSelect({
        id: 'question1',
        text: 'Project follows a documented SDLC process. Documentation shoud include all phases and goals & requirements for each step ?',
        subText: '(A SDLC process consists of several phases, from planning & gathering requirements to coding, testing, deployment and manteinance but might contain more or some of those can be done together as one single phase for example)',
        
        options: options,
     });
  
     const question2 = new SingleSelect({
        id: 'question2',
        text: 'SDLC process is versioned and projects can link/refer to a specific version ?',
        options: options,
     });
  
 
     const question3 = new SingleSelect({
       id: 'question3',
       text: 'Project source code is stored in a Source Code Management (SCM) tool. All modifications are tracked ?',
       options: options,
    });
 
 
    const question4 = new SingleSelect({
       id: 'question4',
       text: 'Project configuration files are stored & versioned together with source code. All modifications are tracked ?',
       options: options,
    });
 
 
    const question5 = new SingleSelect({
       id: 'question2',
       text: 'Project build recipe is versioned together with the source code. All modifications are tracked ?',
       subText: '(Configuration files must not contain sensitive information)',
       options: options,
    });
 
 
    const question6 = new SingleSelect({
       id: 'question6',
       text: 'Project infrastructure code is stored & versioned together with source code. All modifications are tracked ?',
       options: options,
    });
 
 
    const question7 = new SingleSelect({
       id: 'question7',
       text: 'Technical debt is measured, tracked and kept under a team agreed & documented threshold ?',
       options: options,
    });
 

    export { title,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7 };
  