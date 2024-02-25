// Onboarding.js
import { Stepper, Step, StepLabel, StepContent, Button } from '@mui/material';
import { useState } from 'react';

const steps = ['Welcome', 'Getting Started', 'Customize'];

export default function Onboarding() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Stepper activeStep={activeStep} className="my-8 w-full max-w-md">
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className="mb-4">All steps completed</Typography>
                        <Button onClick={handleReset} className="mb-4">
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <StepContent>
                            <Typography>{getStepContent(activeStep)}</Typography>
                            <div className="mt-6">
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className="mr-2"
                                >
                                    Back
                                </Button>
                                <Button variant="contained" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </StepContent>
                    </div>
                )}
            </div>
        </div>
    );
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Welcome to our app!';
        case 1:
            return 'Let\'s get started.';
        case 2:
            return 'Customize your experience.';
        default:
            return 'Unknown step';
    }
}
