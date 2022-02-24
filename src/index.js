module.exports =
    function check(str, bracketsConfig) {
        // your solution
        let buffer = []
        let res = true;
        let Brackets = { '(': ')', '{': '}', '[': ']', '|': '|', '1': '2', '3': '4', '5': '6', '7': '7', '8': '8' }
        let Perverse = { '|': '|', '7': '7', '8': '8' }
        if (str.length % 2 > 0) {
            res = false;
        } else {
            for (let i = 0; i < str.length; i++) {
                let key = str[i];
                if (key in Perverse && key === buffer[buffer.length - 1]) {
                    buffer.pop();
                } else if (key in Brackets) {

                    buffer.push(str[i]);

                } else if (str[i] == Brackets[buffer[buffer.length - 1]]) {

                    buffer.pop();

                } else {
                    res = false;
                }
            }

        }
        console.log(res, buffer.length)
        if (buffer.length > 0) {
            res = false;
        }

        return res;

    }