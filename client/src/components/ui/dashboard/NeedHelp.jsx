export default function NeedHelp({ onNavigate }) {
    return (
        <div className="need-help">
            <h3>Need Help?</h3>
            <p>Have questions about your appointments or orders? We are here to help you every step of the way.</p>
            <button type="button" onClick={() => onNavigate("profile")}>Contact Us</button>
        </div>
    );
}