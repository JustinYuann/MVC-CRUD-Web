import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.*;
import java.nio.charset.StandardCharsets;

public class NPMCommand {
    public static void main(String[] args) throws IOException, InterruptedException {
        File selectedDirectory = FileChooserDemo.createFolderChooser();
        // String st = Files.toString(selectedDirectory, StandardCharsets.UTF_8);
        // String var = File.getPath(selectedDirectory);
        /*
         * Location where the Nodejs Project is Present
         */

        String cmdPrompt = "cmd";
        String path = "/c";
        String npmUpdate = "npm update";
        String npm = "npm";
        String update = "update";
        String createApp = "npm create-react-app my-app";

        File jsFile = selectedDirectory;
        List<String> updateCommand = new ArrayList<String>();
        // updateCommand.add(cmdPrompt);
        // updateCommand.add(path);
        // updateCommand.add(npmUpdate);
        updateCommand.add(createApp);

        runExecution(updateCommand, jsFile);

    }

    public static void runExecution(List<String> command, File navigatePath) throws IOException, InterruptedException {
        System.out.println(navigatePath);

        ProcessBuilder executeProcess = new ProcessBuilder();
        executeProcess.command("cmd", "/c", "npx create-react-app my-app").directory(navigatePath);
        Process resultExecution = executeProcess.start();

        BufferedReader br = new BufferedReader(new InputStreamReader(resultExecution.getInputStream()));
        String line;
        while (true) {
            line = br.readLine();
            if (line == null) {
                break;
            }
            System.out.println(line);
        }

        int resultStatust = resultExecution.waitFor();
        System.out.println("Result of Execution" + (resultStatust == 0 ? "\tSuccess" : "\tFailure"));
    }
}