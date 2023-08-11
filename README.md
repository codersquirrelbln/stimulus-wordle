## stimulus-wordle
A minimalistic wordle version build with stimulus

#### ToDo List - MVP 1st iteration
- [ ] static page with ONE input field (stimulus target, limit on 5 letters, no special characters, Umlaute, accents or numbers ) -> Use html input pattern
- [ ] Test out with ONE correct word saved in JS
- [ ] When hitting enter, stimulus will
  - [ ] calculate the score and show word display letters separately with corresponding colors for
        Correct and correct placing, correct and wrong placing, and incorrect letter
  - [ ] Clear input field


#### ToDo List - MVP later iterations
- [ ] Implement six rows with five input fields each and have boxes change color corresponding to correct/incorrect placement and appearance (flip open fields?)
- [ ] Input jumps to next box when previous box is filled
- [ ] Let user know if word does not exist
- [ ] Implement keyboard: Allow user input from their keyboard and/or built keyboard, allow deletion etc
Letters on displayed keyboard need to be distinguishable from unused, used and wrong, used and right
- [ ] If the word is wrong, the next row is available, if it is correct, everything gets disabled

- [ ] Add tests
- [ ] Let the user create an account to track statistical achievements (the wordle of the NYT actually tracks it via the browser/through cookies?)
- [ ] Let the user switch between different languages -> No special characters when using for example French, German, or Spanish!
- [ ] Change numnber of tries and number of letters
- [ ] Let the user share their wordle (maybe just showing color squares and not revealing the letters)
- [ ] Get a new word without having to waiting 24hrs


##### Learning experience
- Implementing an API to a dictionary
- Use Postman to test out API calls
- Implement switches for different languages
- Getting to know stimulus
- Really minimizing code
- Add JS tests and maybe even UI tests


##### General thoughts
- Keeping in mind for later: if one letter appears multiple times, it will only show green or yellow once, unless both are placed correctly, then it shows two green of course
