def calculate_tip(bill_amount, service_quality, num_people):
    tip_per_person = (bill_amount * (service_quality / 100)) / num_people
    return tip_per_person

# Test case 1
test_case_1_tip = calculate_tip(500, 5, 2)
print("Test Case 1 Tip:", test_case_1_tip)

# Test case 2
test_case_2_tip = calculate_tip(1000, 3, 5)
print("Test Case 2 Tip:", test_case_2_tip)