/**
 * Pamela Fennell
 * 1/24/2022
 * CE06: HTML Forms
 */

// Problem #1 – Fill'er Up
// Problem #2 – Movie Star

/***********
 *  NOTES
 */
// Both problems will appear on the page
// users will be able to choose which problem they run
// based on the buttons they click



// ********************
// Problem #1 – Fill'er Up

// add click event to
// startConv button 
document.querySelector("#startConv").addEventListener("click", function(e)
    {
        // validate that output is true 
        // then continue to solution
        if ( document.querySelector("#userGallons").reportValidity())
        {

            // grab number of gallons from user input
            // let userGallons represent the number of gallons the user has
            // input must be in decimal format - parseFloat
            let userGallons = parseFloat(document.querySelector("#userGallons").value);

            let qtChoice = document.querySelector("#qtChoice").value;

            let ptChoice = document.querySelector("#ptChoice").value;

            let cupChoice = document.querySelector("#cupChoice").value;

            // userGallons is number of gallons they need to convert
            // multiply number of gallons by conversion type
            // userGallons * qtChoice
            // userGallons * ptChoice
            // userGallons * cupChoice
            let qtAns = userGallons * qtChoice;
            let ptAns = userGallons * ptChoice;
            let cupAns = userGallons * cupChoice;


            // once Ans is converted
            // assign Ans to
            // qtAns or ptAns or cupAns
            // then output the finalResult
            // AND clear, reset, or " " unused fields

            if (document.querySelector("#qtChoice").checked)
            {
                document.querySelector("#qtAns").value = qtAns;
                // document.querySelector("#qtAns").innerHTML = `qt ${qtAns}`;
            }
            else 
            {
                document.querySelector("#qtAns").value = " ";

            }

            if(document.querySelector("#ptChoice").checked)
            {
                document.querySelector("#ptAns").value = ptAns;            
                // document.querySelector("#ptAns").innerHTML = `pt ${ptAns}`;
            }
            else
            {
                document.querySelector("#ptAns").value = " ";   
            }

            if (document.querySelector("#cupChoice").checked)
            {
                document.querySelector("#cupAns").value = cupAns;
                // document.querySelector("#cupAns").innerHTML = `cups ${cupAns}`;
            }
            else
            {
                document.querySelector("#cupAns").value = " ";
            }


        }
    }

); 
// end of Problem #1


//*************//
// Problem #2 – Movie Star
// grab total number of movies the user has in multiple formats
// determine what the ranking is



// add click event to
// ranking button 
document.querySelector("#ranking").addEventListener("click", function(e)
    {
        // validate that all outputs are true 
        // then continue to solution
        if ( document.querySelector("#numDVD").reportValidity() &&
            document.querySelector("#numBlu").reportValidity() &&
            document.querySelector("#numUV").reportValidity() )
        {
            // grab all 3 input values
            // as whole numbers
            // positive values only
            let numDVD = parseInt(document.querySelector("#numDVD").value);
            let numBlu = parseInt(document.querySelector("#numBlu").value);
            let numUV = parseInt(document.querySelector("#numUV").value);

            // set finalResults to totalNum of movies owned
            let totalNum = numDVD + numBlu + numUV;

            if (totalNum < 50)
            {
            
                //if user has < 50 movies
            
                //then set h1 tag to
                let bronze = totalNum;
                document.querySelector("#showRanking").innerHTML = `Your collection contains only ${bronze} movies, which makes you a bronze star member.`;
            
                
                // when see ranking button is clicked
                // set image to display based on the totalNum
                // at bronze level
                document.querySelector("#showBanner").src = "IMG/bronzeStar.jpg";

            
            }
            
            else if (totalNum >= 50 && totalNum < 100)
            {
                // if user has 50 up to 100 movies
            
                // set h1 tag to
                let silver = totalNum;
                document.querySelector("#showRanking").innerHTML = `Your collection contains ${silver} movies, which makes you a silver star member.`;
            
            
                // when see ranking button is clicked
                // set image to display based on the totalNum
                // at silver level
                document.querySelector("#showBanner").src = "IMG/silverStar.jpg";

            }
            
            
            else if (totalNum >= 100)
            {
                // if user has 100 or more
            
                // set h1 tag to show Gold ranking status
                let gold = totalNum;
                document.querySelector("#showRanking").innerHTML = `Wow! Your collection contains ${gold} movies, which makes you a gold star member.`;
            
                // when see ranking button is clicked
                // set image to display based on the totalNum
                // at gold level
                document.querySelector("#showBanner").src = "IMG/goldStar.jpg";

            }

        }

    }

); 

// end of Problem #2
