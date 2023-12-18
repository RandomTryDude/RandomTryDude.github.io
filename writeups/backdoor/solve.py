def sl4y3r(s):
    return int(s) - 1

def sh4dy(s):
    result = ''
    for char in s:
        if char.isdigit():
            result += char
    return result

def n4ut1lus(s):
    it4chi_result = it4chi(s)
    if len(it4chi_result) != len(valid_password):
        return False
    for i in range(len(it4chi_result)):
        if it4chi_result[i] != valid_password[i]:
            return False
    return True

def it4chi(s):
    return [ord(char) for char in s]

def flag(s, s2):
    sb = []
    for i in range(len(s2)):
        sb.append(chr(ord(s2[i]) ^ ord(s[i % len(s)])))
    return ''.join(sb)

def validate_credentials():
    trim = input("Enter username: ").strip()
    trim2 = input("Enter password: ").strip()

    if trim == valid_user and n4ut1lus(trim2):
        encrypted_flag = "flag{" + flag(str(sl4y3r(sh4dy(trim2))), "U|]rURuoU^PoR_FDMo@X]uBUg") + "}"
        print(encrypted_flag)
    else:
        print("Invalid credentials. Please try again.")


valid_password = [52, 84, 49, 98, 97, 98, 97]  # flag{aLiBabA_and_forty_thiEveS}
valid_user = "Jack Ma"  # Updated with the provided valid_user value
validate_credentials()
