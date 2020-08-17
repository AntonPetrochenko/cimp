export class RubbishResponse {
    payload: any = {}
    constructor() {
        var arrayLength: number = Math.random()*50
        for (var i = 0; i < arrayLength ; i++) {
            let randomString: string = ""
            var stringLength: number = Math.random()*50
            for (var j = 0; j < stringLength; j++) {
                randomString += String.fromCharCode(Math.floor((Math.random()*96+32)))
            }
            this.payload[String.fromCharCode(Math.floor((Math.random()*96+32)))] = randomString
        }
    }
}