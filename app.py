from flask import Flask, request, jsonify, render_template
from datetime import datetime, timedelta

app = Flask(__name__)

# Home route
@app.route('/')
def index():
    return render_template('index.html')

# Endpoint for processing card payments
@app.route('/process_card_payment', methods=['POST'])
def process_card_payment():
    data = request.get_json()
    card_number = data['card_number']
    expiry = data['expiry']
    cvv = data['cvv']

    # Validate card number (must be 16 digits)
    if not (card_number.isdigit() and len(card_number) == 16):
        return jsonify({'status': 'error', 'message': 'Invalid card number. Must be 16 digits.'}), 400

    # Validate expiry date (must be at least 1 year later)
    try:
        expiry_date = datetime.strptime(expiry, '%m/%y')
        if expiry_date <= datetime.now() + timedelta(days=365):
            return jsonify({'status': 'error', 'message': 'Expiry date must be at least 1 year later.'}), 400
    except ValueError:
        return jsonify({'status': 'error', 'message': 'Invalid expiry date format. Use MM/YY.'}), 400

    # Validate CVV (must be 3 digits)
    if not (cvv.isdigit() and len(cvv) == 3):
        return jsonify({'status': 'error', 'message': 'Invalid CVV. Must be 3 digits.'}), 400

    # Process payment (simulate success for demonstration)
    return jsonify({'status': 'success', 'message': 'Payment successful!'}), 200
# Endpoint for processing UPI payments
@app.route('/process_upi_payment', methods=['POST'])
def process_upi_payment():
    # Here you would handle the UPI payment processing logic
    # For demonstration, simulate a successful payment
    data = request.get_json()
    upi_id = data['upi_id']
    
    # Process payment here (replace with actual implementation)
    # Simulate success
    return jsonify({'status': 'success', 'message': 'UPI payment successful!'})

if __name__ == '__main__':
    app.run(debug=True)
