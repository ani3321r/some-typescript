enum SeatChoice{
    aisle,
    middle=10,//here once we declare a number the rest are incrimented automatically
    window//also we can change the value if we want
}

enum CarChoice{
    bmw="bm",//once we initialise this with a string
    porsche=1,//we can initialise this with a number and the rest will be incrimented automatically
    audi,
    gtr,
}

const seat1 = SeatChoice.aisle
