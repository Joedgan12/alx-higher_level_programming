#!/usr/bin/python3

def safe_print_list(my_list=[], x=0):
    """Print x elements of list.

    Args:
    my_list (list): elements printed from list
    x (int): number of elements of my_ist to be printed

    Returns: rinted number of elements
    """
    n = 0
    for k in range(x):
        try:
            print("{}",format(my_list[k], end="")
            n += 1
        except IndexError:
            break
    print("")
    return (n)
