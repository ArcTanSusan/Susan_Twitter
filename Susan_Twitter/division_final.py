""" Integer division without division operator. Solution: Binary search. """
"""cd to folder where this python file is stored, and then type "python divison.py" on command line window to use this file """

def divide(num, den): #num = numerator, den = denominator
	if den > num: #don't want to produce a fractional quotient
		print "Error: don't want to produce fractional quotient"
		return  #exit function 
	if den == 0: # don't want to divide by 0
		print "Error: can't divide by 0!"
		return #exit function 
	if den < 0: #if negative, make positive.
		den = -den 
	if num < 0: #if negative, make positive.
		num = -num 

	#Initialize some variables
	guess_quotient = len(range(2,num))/2 
	possible_ans = guess_quotient * den 
	remainder = num - possible_ans
	low_bound = 2 
	high_bound = num 
	new_list = []

	while remainder != 0: #use the remainder as judging critiera for whether or not guess_quotient is a good guess
		if remainder < 0: #Negatvive remainder, when guess_quotient is greater thann the actual quotient. Make a smarter, smaller guess. 
			high_bound = guess_quotient - 1  #decrease high_bound, because the guess is too high
			guess_quotient = (low_bound + high_bound)/2
			possible_ans = guess_quotient * den 
			remainder = num - possible_ans
		if remainder > 0: #positive remainder, make a smarter, larger quotient guess. 
			low_bound = guess_quotient + 1 #increase low_bound, because guess is too low 
			guess_quotient = (low_bound + high_bound)/2
			possible_ans = guess_quotient * den 
			remainder = num - possible_ans
			new_list.append((guess_quotient,remainder)) #append new guess_quotient and new remainder as tuple to new_list
			if len(new_list) > 1: #check as to make sure there are other quotients in new_list. If-statement exists the while loop when guess is correct
				if new_list[-1] == new_list[-2]: 
					print guess_quotient, "remainder:", remainder, new_list
					return #exit function when two last duplicates are found in new_list
	print guess_quotient, "remainder:", remainder
	return #exit function when while loop is completed, when remainder = 0 exists

""" Test cases below """ 
divide(100,10) #10, r0
divide(27,-3) #9 r0
divide(10,100) #ERROR!
divide(10,0) #ERROR! 
divide(37,2) #18 r1
divide(32,3) #10 r2
divide(38,-3) #12 r2
divide(1347,8) #168 r3
divide(1347,9) #149 r6 
divide(1347,139) #9 r96 