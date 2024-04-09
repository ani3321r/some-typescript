var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["aisle"] = 0] = "aisle";
    SeatChoice[SeatChoice["middle"] = 10] = "middle";
    SeatChoice[SeatChoice["window"] = 11] = "window"; //also we can change the value if we want
})(SeatChoice || (SeatChoice = {}));
var CarChoice;
(function (CarChoice) {
    CarChoice["bmw"] = "bm";
    CarChoice[CarChoice["porsche"] = 1] = "porsche";
    CarChoice[CarChoice["audi"] = 2] = "audi";
    CarChoice[CarChoice["gtr"] = 3] = "gtr";
})(CarChoice || (CarChoice = {}));
var seat1 = SeatChoice.aisle;
