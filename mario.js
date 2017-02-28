
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
 function printPyramid(height) {
     // console.log("Uh oh... the pyramid is under construction.");
     // console.log("Check back soon, our developers are hard at work as we speak!");
     pyramid = ""
     for (var i = 0; i < height; i++){
        for (var j = 0; j < height-i-1; j++){
            pyramid = pyramid + " "
        }
         for (var k = 0; k < i+2; k++){
             pyramid = pyramid + "#"
         }
         pyramid = pyramid + "\n"

     }
     console.log(pyramid)
 }
