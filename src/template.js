/** 
 * Create a method that takes 3 input parameters. A template, a character, and a character string.
 * Example: (XXX)XXX-XXX-XX, "X", 26365858364. 
 * 
 * All the characters in the template that match the character (second parameter) that is passed to 
 * the function must be replaced with the third parameter. 
 * Examples:
 * (XXX)XXX-XXX-XX, "X", 26365858364 -> (263)658-583-64
 * (XXX)XXX-XXX-XX, "X", 26365858 -> (263)658-58X-XX
 * (XXX)XXX-XXX-XX, "X", 2636585836456 -> (263)658-583-64
 * 
 * Consider validating that the template includes the character and the third parameter is not empty. 
 * In the case that one of these conditions is not met, the method must return the message "Invalid parameters"
 * 
 * @param {string} model - Template to be used
 * @param {string} character - Character to search on template in order to replace it 
 * @param {string} message - String to be placed on the template
 * 
 * @returns {string}  - Formatted string covering the template
*/

const convertToTemplate = (model, character, message) => {
    const messageAsArray = message.split('');
    const modelAsArray = model.split('');
    while (modelAsArray.includes(character) && messageAsArray.length >= 1) {
        modelAsArray.splice(modelAsArray.indexOf(character), 1, messageAsArray[0]);
        messageAsArray.shift();
    }
    return modelAsArray.join('');
}

function template(model, character, message) {

    if (!message || !model.includes(character)) {
        return 'Invalid parameters';
    } else {
        return convertToTemplate(model, character, message);
    }    

}

module.exports = template;
