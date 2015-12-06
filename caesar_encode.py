import random

toencode = 'sring to encode'

period = 13

offs = [random.randint(-1000, 1000) for _ in range(0, period)]

print(offs)

ans = []
oi = 0

for c in toencode:
	ans.append(ord(c) + offs[oi])
	oi += 1
	oi %= period

print(ans)

decoded = ""

oi = 0
for a in ans:
	decoded+=(chr(a - offs[oi]))
	oi += 1
	oi %= period

print(decoded)