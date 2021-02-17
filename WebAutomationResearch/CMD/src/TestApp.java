import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Scanner;

public class TestApp {
    public static void main(String[] args) throws IOException {
        Scanner myObj = new Scanner(System.in);
        // Runtime.getRuntime().exec("explorer.exe /select," +
        // "C:/Users/Justin/Documents/Leisure Code");

        try {
            Process proc = Runtime.getRuntime()
                    .exec("explorer.exe /select, " + filePaths.get(i).replaceAll("/", "\\\\"));
            proc.waitFor();
        } catch (IOException | InterruptedException ex) {
            ex.printStackTrace();
        }

        ProcessBuilder processBuilder = new ProcessBuilder();
        processBuilder.command("cmd", "/c", "npx create-react-app my-app")
        .directory(new File("C:\\Users\\Justin\\Documents\\Leisure Code\\Tutorial"));

        Process process = processBuilder.start();
        printResults(process);

        System.out.println("Enter Directory Where You Want Your React App");
        String userName = myObj.nextLine();
        try {
        String ss = null;
        Process p = Runtime.getRuntime().exec("cmd.exe /c start npx create-react-app
        my-app" + userName);
        BufferedWriter writeer = new BufferedWriter(new
        OutputStreamWriter(p.getOutputStream()));
        writeer.write("npm");
        writeer.flush();
        BufferedReader stdInput = new BufferedReader(new
        InputStreamReader(p.getInputStream()));
        BufferedReader stdError = new BufferedReader(new
        InputStreamReader(p.getErrorStream()));
        System.out.println("Here is the standard output of the command:\n");
        while ((ss = stdInput.readLine()) != null) {
        System.out.println(ss);
        }
        System.out.println("Here is the standard error of the command (if any):\n");
        while ((ss = stdError.readLine()) != null) {
        System.out.println(ss);
        }

        } catch (IOException e) {
        System.out.println("FROM CATCH" + e.toString());
        }
    }

    public static void printResults(Process process) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        String line = "";
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
    }

}
