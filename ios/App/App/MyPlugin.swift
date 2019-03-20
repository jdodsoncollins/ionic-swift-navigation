import Capacitor

@objc(MyPlugin)
public class MyPlugin: CAPPlugin {
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value")
        let nvc = NavVC();
        nvc.goTo();
        call.success([
            "value": value
            ])
    }
}

public class NavVC: UIViewController {
    func goTo() {        
        let initialViewController = UIStoryboard(name: "Main", bundle:nil).instantiateInitialViewController() as! UIViewController
        DispatchQueue.main.async {
            let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
            appDelegate.window?.rootViewController = initialViewController
        }
        
        let storyBoard: UIStoryboard = UIStoryboard(name: "Main", bundle: nil)
        let mainViewController = storyBoard.instantiateViewController(withIdentifier: "MainViewController") as! MainViewController
        self.present(mainViewController, animated: true, completion: nil)
    }
}
