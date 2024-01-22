#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    n = 0
    for k in range(x):
        try:
            print(my_list[k], end="")
            n += 1
        except IndexError:
            break
    print("")
    Return
