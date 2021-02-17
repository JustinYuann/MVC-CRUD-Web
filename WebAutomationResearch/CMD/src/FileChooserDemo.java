import java.io.File;
import java.nio.file.Files;

import javax.swing.JFileChooser;

public class FileChooserDemo {

    public static File createFolderChooser() {
        JFileChooser chooser = new JFileChooser();
        chooser.setCurrentDirectory(new java.io.File("."));
        chooser.setDialogTitle("choosertitle");
        chooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
        chooser.setAcceptAllFileFilterUsed(false);

        if (chooser.showOpenDialog(null) == JFileChooser.APPROVE_OPTION) {
            // System.out.println("getCurrentDirectory(): " +
            // chooser.getCurrentDirectory());
            // System.out.println("getSelectedFile() : " + chooser.getSelectedFile());
        } else {
            System.out.println("No Selection ");
        }
        // String returnString = File.getPath();
        return chooser.getSelectedFile();
    }

}