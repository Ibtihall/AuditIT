const { SingleSelect, HTML } = RoundtableJS;
import { options } from '../utils.js';

     const title = new HTML({
      id: 'welcome_message',
      content: '<h2>Branching strategy</h2>',
      styles: {
          root: {
              textAlign: 'center',
              marginBottom: '30px'
          }
      }
   });

   const question1 = new SingleSelect({
      id: 'branchingStrategyQuestion1',
      text: 'There is a branch strategy defined, versioned and iterated ?',
      options: options,
   });

    const question2 = new SingleSelect({
        id: 'branchingStrategyQuestion2',
        text: 'Project follows the branch strategy and specific version is documented if applicable ?',
        options: options,
    });

    const question3 = new SingleSelect({
        id: 'branchingStrategyQuestion3',
        text: 'Branch strategy follows closely a market standard (git flow, GitHub flow, release flow, trunk based, ...) and exceptions, if any, are documented ?',
        options: options,
    });
    
    const question4 = new SingleSelect({
        id: 'branchingStrategyQuestion4',
        text: 'Branches are propery maintained (old & unused branches are not left open) ?',
        options: options,
    });

    const question5 = new SingleSelect({
        id: 'branchingStrategyQuestion4',
        text: 'There is a process or tooling enforcing the branching strategy or periodically warning the team about violations ?',
        options: options,
    });

    const question6 = new SingleSelect({
        id: 'branchingStrategyQuestion4',
        text: 'Violations of branching strategy are tracked and corrected in a prompt manner ?',
        options: options,
    });


     
 

    export { title, question1, question2, question3, question4, question5, question6};
  