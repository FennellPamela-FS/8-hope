/**
 * Pamela Fennell
 * 1/26/2002
 * CEO7: Final Project
 */


// Problem #1 - BMI Calculator

// target button: Calculate Your BMI
document.querySelector("#calcBMI").addEventListener("click", function(e)
        {
            // validation
            if ( document.querySelector("#feet").reportValidity() &&
                 document.querySelector("#inches").reportValidity() &&
                 document.querySelector("#weight").reportValidity() )
            {
                // grab user input for feet and inches
                // then set that to height
                
                // grab feet as a whole number
                let userFeet = parseInt(document.querySelector("#feet").value);
                
                // grab inches as a float
                let userInches = parseFloat(document.querySelector("#inches").value);

                // convert feet to inches
                // totalInches =  (feet * 12) + inches
                let totalInches =  (userFeet * 12) + userInches;

                // set totalInches as userHeight
                let userHeight = totalInches;
                
                // grab userWeight input
                // store as float
                let userWeight = parseFloat(document.querySelector("#weight").value);

                // calculate BMI
                let bmiRange = ( userWeight / userHeight / userHeight ) * 703;

                // bmiRange = Math.ceil(bmiRange);
                
                // create conditionals to output final results 
                // and display correct image based on results 
                if ( bmiRange > 0 && bmiRange < 18.5 )
                {
                    // then weightRange = Under Weight
                    // pic = underWeight.jpg
                    let weightRange = "Under Weight";
                    let pic = "underWeight";

                    // highlight weightRange based on BMI results
                    document.querySelector("#finalResults").className = `${pic}`;

                    // add finalResults to innerHTML for h1 tag
                    document.querySelector("#finalResults").innerHTML = `Your BMI is ${bmiRange.toFixed(1)}, indicating your weight is in ${weightRange} range for adults of your height.`;

                    // display image based on weight range
                    // image to display 
                    // ${pic}
                    document.querySelector("#rangePic").src = `IMG/${pic}.jpg`;

                }
               else if ( bmiRange >= 18.5 && bmiRange < 24.9 )
               {
                    // then weightRange = Healthy Weight
                    // pic = healthyWeight.jpg
                    let weightRange = "Healthy Weight";
                    let pic = "healthyWeight";

                    // highlight weightRange based on BMI results
                    document.querySelector("#finalResults").className = `${pic}`;

                    // add finalResults to innerHTML for h1 tag
                    document.querySelector("#finalResults").innerHTML = `Your BMI is ${bmiRange.toFixed(1)}, indicating your weight is in ${weightRange} range for adults of your height.`;

                    // display image based on weight range
                    // image to display 
                    // ${pic}
                    document.querySelector("#rangePic").src = `IMG/${pic}.jpg`;

                }
                else if( Math.ceil(bmiRange) >= 25.0 && bmiRange < 29.9 )
                {
                    // if bmiRange == 24.9 then 
                    // Math.round will pull it back 

                    // then weightRange = Over Weight
                    // pic = overWeight.jpg
                    let weightRange = "Over Weight";
                    let pic = "overWeight";

                    // highlight weightRange based on BMI results
                    document.querySelector("#finalResults").className = `${pic}`;

                    // add finalResults to innerHTML for h1 tag
                    document.querySelector("#finalResults").innerHTML = `Your BMI is ${bmiRange.toFixed(1)}, indicating your weight is in ${weightRange} range for adults of your height.`;

                    // display image based on weight range
                    // image to display 
                    // ${pic}
                    document.querySelector("#rangePic").src = `IMG/${pic}.jpg`;

                }
                else if ( Math.ceil(bmiRange) >= 30.0 && bmiRange < 35 )
                {   // if bmiRange == 29.9 then 
                    // Math.ceil will push it to 30

                    // then weightRange = Obese Weight
                    // pic = obeseWeight.jpg
                    let weightRange = "Obese Weight";
                    let pic = "obeseWeight";

                    // highlight weightRange based on BMI results
                    document.querySelector("#finalResults").className = `${pic}`;

                    // add finalResults to innerHTML for h1 tag
                    document.querySelector("#finalResults").innerHTML = `Your BMI is ${bmiRange.toFixed(1)}, indicating your weight is in ${weightRange} range for adults of your height.`;

                    // display image based on weight range
                    // image to display 
                    // ${pic}
                    document.querySelector("#rangePic").src = `IMG/${pic}.jpg`;
                }
                else if( bmiRange >= 35 )
                {
                    // then weightRange = Extreme Obese
                    // pic = extremeObeseWeight.jpg
                    let weightRange = "Extreme Obese";
                    let pic = "extremeObeseWeight";

                    // highlight weightRange based on BMI results
                    document.querySelector("#finalResults").className = `${pic}`;

                    // add finalResults to innerHTML for h1 tag
                    document.querySelector("#finalResults").innerHTML = `Your BMI is ${bmiRange.toFixed(1)}, indicating your weight is in ${weightRange} range for adults of your height.`;

                    // display image based on weight range
                    // image to display 
                    // ${pic}
                    document.querySelector("#rangePic").src = `IMG/${pic}.jpg`;
                }
                else // if ( bmiRange <= 0 )
                {
                    // add finalResults to innerHTML for h1 tag
                    // show reset option instructions
                    document.querySelector("#finalResults").innerHTML = `Invalid Input Detected. Hit "Reset" to try again.`;

                } 

            } // end validation

        }

    );

// End of Problem #1
