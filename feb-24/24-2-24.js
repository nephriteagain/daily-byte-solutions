/**
Given an array of words, return the length of the longest phrase, 
containing only unique characters, 
that you can form by combining the given words together.

Ex: Given the following words…

words = ["the","dog","ran"], 
return 9 because you can combine all the words, 
i.e. "the dog ran" since all the characters in the phrase are unique.
Ex: Given the following words…

words = ["the","eagle","flew"], 
return 4 because "flew" is the longest phrase you can create without using duplicate characters.
 */


// first remove words with repeated chars
// check each word save what chars they are using -- for loop
// compare it to every other word -- another for loop

//DYNAMIC PROGRAMMING