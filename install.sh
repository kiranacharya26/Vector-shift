set -e

# backend install
echo "Installing backend dependencies..."
cd backend || exit
python3 -m venv myenv
source myenv/bin/activate
pip install -r requirements.txt
deactivate

# frontend install
echo "Installing frontend dependencies..."
cd ../frontend || exit
npm install

echo "installation complete"
