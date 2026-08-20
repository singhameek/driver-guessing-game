import random
import sys
while True:
    x = random.randint(0,100)

    y = int(input("What's your guess? 0-100 \n"))
    while True:
        if y > x:
            print("Lower")
            y = int(input("What's your guess? \n"))
        elif y < x:
            print("Higher")
            y = int(input("What's your guess? \n"))
        else:
            print("Correct!")
            sys.exit()