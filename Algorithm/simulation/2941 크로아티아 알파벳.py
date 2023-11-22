import sys
input = sys.stdin.readline

s = input().rstrip()
cro_alphabet = ['lj', 'nj', 's=', 'dz=', 'z=', 'c=', 'c-', 'd-']

for c in cro_alphabet :
    s = s.replace(c,'*')

print(len(s))