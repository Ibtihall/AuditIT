const { Survey, HTML, ProgressBar } = RoundtableJS;
import * as foundations from './steps/foundations.js';
import * as sourceCode from './steps/source_code.js';
import * as codeReview from './steps/code_review.js';
import * as branchingStrategy from './steps/branching_strategy.js';
import * as documentation from './steps/documentation.js';
import * as continuousIntegration from './steps/continuous_integration.js';

async function runSurvey() {

   const survey = new Survey({ 
      participantId: 'participant_123' ,
      styles: {
         body: {
            background: '#f0f8ff',
         },
         container: {
            border: '1px solid #b0d4ff',
            boxShadow: '0 0 10px rgba(0,0,255,0.1)',
            '@media (max-width: 650px)': {
               border: 'none',
            },
         },
         button: {
            backgroundColor: '#4682b4',
            '&:hover': {
               backgroundColor: '#5f9ea0',
            }
         },
         question: {
            borderBottom: '1px solid #b0d4ff',
            paddingBottom: '20px',
            '@media (max-width: 660px)': {
               borderBottom: 'none',
               paddingBottom: '0px',
            },
         }
      }
   });


   const progressBar = new ProgressBar({
      maxPages: 32, 
      progressAsPercentage: true,
      styles: {
          bar: {
              background: '#4682b4',
          }
      }
  });
  survey.addPlugin(progressBar);

   const welcome = new HTML({
      id: 'welcome',
      content: `
          <h1 style="color: #4682b4; text-align: center;"> Software Development Life Cycle</h1>
          <p style="text-align: center;">We appreciate your participation in this study.</p>
      `
   });

   await survey.showPage({ id: 'welcome_page', elements: [welcome] });

   // Foundations Questions
 
   await survey.showPage({ id: 'page1', elements: [foundations.title,foundations.question1] });
   await survey.showPage({ id: 'page2', elements: [foundations.title,foundations.question2] });
   await survey.showPage({ id: 'page3', elements: [foundations.title,foundations.question3] });
   await survey.showPage({ id: 'page4', elements: [foundations.title,foundations.question4] });
   await survey.showPage({ id: 'page5', elements: [foundations.title,foundations.question5] });
   await survey.showPage({ id: 'page6', elements: [foundations.title,foundations.question6] });
   await survey.showPage({ id: 'page7', elements: [foundations.title,foundations.question7] });
 
   // Source code access management Questions
   await survey.showPage({ id: 'page8', elements: [sourceCode.title,sourceCode.question] });

    // Code Review
    await survey.showPage({ id: 'page9', elements: [codeReview.title,codeReview.question1] });
    await survey.showPage({ id: 'page10', elements: [codeReview.title,codeReview.question2] });
    await survey.showPage({ id: 'page11', elements: [codeReview.title,codeReview.question3] });
    await survey.showPage({ id: 'page12', elements: [codeReview.title,codeReview.question4] });
   
   // Branching Strategy
   await survey.showPage({ id: 'page13', elements: [branchingStrategy.title,branchingStrategy.question1] });
   await survey.showPage({ id: 'page14', elements: [branchingStrategy.title,branchingStrategy.question2] });
   await survey.showPage({ id: 'page15', elements: [branchingStrategy.title,branchingStrategy.question3] });
   await survey.showPage({ id: 'page16', elements: [branchingStrategy.title,branchingStrategy.question4] });
   await survey.showPage({ id: 'page17', elements: [branchingStrategy.title,branchingStrategy.question5] });
   await survey.showPage({ id: 'page18', elements: [branchingStrategy.title,branchingStrategy.question6] });

   // Documentation
   await survey.showPage({ id: 'page19', elements: [documentation.title,documentation.question1] });
   await survey.showPage({ id: 'page20', elements: [documentation.title,documentation.question2] });
   await survey.showPage({ id: 'page21', elements: [documentation.title,documentation.question3] });
   await survey.showPage({ id: 'page22', elements: [documentation.title,documentation.question4] });
   await survey.showPage({ id: 'page23', elements: [documentation.title,documentation.question5] });
   await survey.showPage({ id: 'page24', elements: [documentation.title,documentation.question6] });
   await survey.showPage({ id: 'page25', elements: [documentation.title,documentation.question7] });

    // Continuous Integration (CI)
    await survey.showPage({ id: 'page26', elements: [continuousIntegration.title,continuousIntegration.question1] });
    await survey.showPage({ id: 'page27', elements: [continuousIntegration.title,continuousIntegration.question2] });
    await survey.showPage({ id: 'page28', elements: [continuousIntegration.title,continuousIntegration.question3] });
    await survey.showPage({ id: 'page29', elements: [continuousIntegration.title,continuousIntegration.question4] });
    await survey.showPage({ id: 'page30', elements: [continuousIntegration.title,continuousIntegration.question5] });
    await survey.showPage({ id: 'page31', elements: [continuousIntegration.title,continuousIntegration.question6] });
    await survey.showPage({ id: 'page32', elements: [continuousIntegration.title,continuousIntegration.question7] });
     
   const allResponses = survey.getAllResponses();
   console.log('allResponsess',allResponses);

 
    survey.finishSurvey('Thank you for completing the survey!');
 }
 
 runSurvey(); 