import { Stepper, Step, StepLabel, StepContent } from '@mui/material';

// Define Steps
<Stepper activeStep={currentStep}>
    <Step>
        <StepLabel>Step  1</StepLabel>
    </Step>
    <Step>
        <StepLabel>Step  2</StepLabel>
    </Step>
    <Step>
        <StepLabel>Step  3</StepLabel>
    </Step>
    <Step>
        <StepLabel>Step  4</StepLabel>
    </Step>
</Stepper>

// control Active step
const [currentStep, setCurrentStep] = useState(0);
// ... code to change currentStep
<Stepper activeStep={currentStep}>
    {/* Step components */}
</Stepper>


// skip step
<Button onClick={() => setCurrentStep(currentStep +  2)}>Skip</Button>


// add content to steps
<StepContent>
    {currentStep ===  0 && <div>Content for Step  1</div>}
    {currentStep ===  1 && <div>Content for Step  2</div>}
    {currentStep ===  2 && <div>Content for Step  3</div>}
</StepContent>

// navigate between steps
<Button onClick={() => setCurrentStep(currentStep -  1)} disabled={currentStep ===  0}>Back</Button>
<Button onClick={() => setCurrentStep(currentStep +  1)} disabled={currentStep ===  2}>Next</Button>

