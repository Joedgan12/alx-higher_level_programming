#!/usr/bin/python3
def magic_calculation(a, b):
    rezalt = 0
    for x in range(1, 3):
        try:
            if x > a:
                raise Exception('Too far')
            else:
                rezalt += (a ** b) / x
        except (Exception):
            rezalt = b + a
            break
    return rezalt
