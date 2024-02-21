# -----------Description---------
# As a part of this Kata, you need to create a function that when provided with
# a triplet, returns the index of the numerical element that lies between the other
# two elements.
# The input to the function will be an array of three distinct numbers.
# ----------Examples----------
# gimme([2, 3, 1]) => 0
# 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
# Another example (just to make sure it is clear):
# gimme([5, 10, 14]) => 1
# 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


# input - array 3
# output - index of middle int

# loop if not max and not min then its the middle
# time complexity of that is going to be O(n^2) so not loving it

# store nums in a dictionary { zero: value; one: value, three: value}
# start with first number as middle
# check next number, if its higher go into next if: if lower - middles is good -if higher: compare 2 and 3, take the lower of those two
# check next number, if its lower, then go into next if: if higher - middle is good - if lower: 

def gimme(arr):
    maxnum = max(arr)
    minnum = min(arr)
    for num in arr:
        if num < maxnum and num > minnum:
            return num
print(gimme([5, 10, 14]))

